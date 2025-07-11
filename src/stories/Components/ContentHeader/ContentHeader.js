const createGitHubExample = () => {
  return `
<style>
  .content-header.content-header--github-example {
    .content-header__subline {
      display: flex;
      align-items: center;
      gap: var(--op-space-2x-small);
      font-size: var(--op-font-x-small);
    }

    .content-header__title-number {
      color: var(--op-color-on-background-alt);
    }
  }
</style>
<header class="content-header content-header--github-example">
  <div class="content-header__details">
    <h1 class="content-header__title">
      Add details to sidebar documentation
      <span class="content-header__title-number">#265</span>
    </h1>
    <div class="content-header__subline">
      <span class="badge badge--primary badge--pill">
        <span class="material-symbols-outlined icon">graph_1</span>
        Merged
      </span>
      <strong>Jeremy-Walton</strong>
      <span>merged 1 commit into</span>
      <div class="badge">main</div>
      <span>from</span>
      <div class="badge">responsive-snippet</div>
      <a class="btn btn--no-border btn--icon btn--small" href="#">
        <span class="material-symbols-outlined icon">content_copy</span>
      </a>
      <span>on Jan 31</span>
    </div>
  </div>
  <div class="content-header__aside">
    <a class="btn btn--small" href="#">Edit</a>
    <a class="btn btn--small" href="#">
      <span class="material-symbols-outlined icon">code</span>
      Code
      <span class="material-symbols-outlined icon">arrow_drop_down</span>
    </a>
  </div>
</header>
`
}

export const createContentHeader = ({
  title = 'Content Header',
  showContext = false,
  contextLabel = 'Context Label',
  showSubline = false,
  sublineLabel = 'Subline Label',
  showAside = false,
  asideExample = 'actions',
  githubExample = false,
}) => {
  if (githubExample) {
    return createGitHubExample()
  }

  const element = document.createElement('header')

  element.className = 'content-header'

  let contextContent = ''
  let sublineContent = ''

  if (showContext) {
    contextContent = `<span class='content-header__context'>${contextLabel}</span>`
  }

  if (showSubline) {
    sublineContent += `<span class='content-header__subline'>${sublineLabel}</span>`
  }

  element.innerHTML = `
  <div class='content-header__details'>
    ${contextContent}
    <h1 class='content-header__title'>${title}</h1>
    ${sublineContent}
  </div>
  `

  if (showAside) {
    const asideElement = document.createElement('div')
    asideElement.className = 'content-header__aside'
    asideElement.innerHTML = '\n    <p>Aside text example</p>\n  '

    if (asideExample === 'actions') {
      asideElement.innerHTML = `
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  `
    }
    element.appendChild(asideElement)
  }

  element.innerHTML += '\n'

  return element
}
