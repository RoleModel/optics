# build-llms-docs architecture

How the classes in [`build-llms-docs.mjs`](build-llms-docs.mjs) communicate. See the
header comment in the script for what the tool produces; this covers how the pieces fit
together.

## Class relationships

```mermaid
classDiagram
    class DocsBuilder {
        storyRenderer
        tokenCatalog
        warnings
        run()
        renderPages()
        sortBySection(pages)
        writePages(pages)
        buildIndexLines(pages)
        writeIndex() / writeFullDoc()
        report(pages)
    }
    class MdxPageConverter {
        file
        text
        storyModules
        convert()
        loadStoryModules()
        replaceCanvasBlocks()
        replaceControlsBlocks()
        replaceTokenDocBlocks()
        replaceAlertBlocks()
        toPage()
    }
    class StoryRenderer {
        document
        render(storiesModule, storyName, file, warnings)
    }
    class TokenCatalog {
        categories
        table(categoryName)
    }
    class WarningCollector {
        list
        add(file, message)
    }

    DocsBuilder --> StoryRenderer : constructs FIRST (installs JSDOM globals)
    DocsBuilder --> TokenCatalog : constructs (parses token CSS once)
    DocsBuilder --> WarningCollector : constructs (one shared collector)
    DocsBuilder --> MdxPageConverter : creates one per .mdx file
    MdxPageConverter --> StoryRenderer : render() for each Canvas, .document for alerts
    MdxPageConverter --> TokenCatalog : table(category)
    MdxPageConverter --> WarningCollector : add(file, message)
    StoryRenderer ..> WarningCollector : add() via per-call argument
```

## Runtime flow for one page (`convert()`)

```mermaid
sequenceDiagram
    participant B as DocsBuilder
    participant C as MdxPageConverter
    participant R as StoryRenderer
    participant T as TokenCatalog
    participant W as WarningCollector

    B->>C: new MdxPageConverter(file, tokenCatalog, storyRenderer, warnings)
    B->>C: convert()
    C->>C: loadStoryModules() — dynamic import() per story module
    Note over C: resolve hook appends .js to extensionless paths

    loop each <Canvas of={...}>
        C->>R: render(storiesModule, storyName, file, warnings)
        R--)W: add(file, msg) — only on missing story / render failure
        R-->>C: pretty-printed HTML (or null)
    end

    loop each <DesignTokenDocBlock>
        C->>T: table(categoryName)
        T-->>C: markdown table (or null)
        C--)W: add(file, "no tokens found...") — only when null
    end

    C-->>B: page { title, slug, section, description, markdown } (or null if no title)
    Note over B: after all pages: sort, write files, then report() reads W.list
```

## Notes

- Everything is wired by constructor injection from `DocsBuilder` — it owns the three
  singletons (`StoryRenderer`, `TokenCatalog`, `WarningCollector`) and hands them to each
  per-page `MdxPageConverter`. No class reaches for module-level state except the path
  constants.
- Construction order matters: `StoryRenderer`'s constructor installs the JSDOM globals
  that story modules use at import time, so `DocsBuilder` builds it before the first
  converter runs `loadStoryModules()`. The converter's alert handling also uses
  `storyRenderer.document` (the dashed dependency above).
- `WarningCollector` is the one shared sink: converters hold it as a field, while
  `StoryRenderer.render` receives it per call (rendering needs the page's file path for
  the message). `DocsBuilder.report()` reads the accumulated list at the very end, which
  is why warning *order* is load-bearing.
- Module-level pure helpers (`resolveStory`, `controlsTable`, `markdownTable`, `walk`,
  etc.) are left off the diagrams — they're stateless functions, not communicating
  objects.
