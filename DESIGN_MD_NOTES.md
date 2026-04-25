# design.md Notes

**Repo:** https://github.com/google-labs-code/design.md
**Spec docs:** https://stitch.withgoogle.com/docs/design-md/specification
**Summary:** A format specification for describing a visual identity to coding agents. A `DESIGN.md` file gives agents a persistent, structured understanding of a design system.

---

## Notes

Colors are limited to Hex in srgb. This means that hsl is not supported and colors have to be converted when generating a DESIGN.md document.

CSS variables that are partial values like `0 0 0 var(--op-border-width)` which represent just the number values of a box shadow don't seem to be supported

CSS functions like `hsl(10deg 10% 10%)` are not supported, especially when each value is a reference to other values.

Neigher DESIGN.md nor https://www.designtokens.org/tr/2025.10/format/ seem to support calculated values like how we do our spacing scales. This leads to having to generate the token as the calculated value. This is ok but isn't accurately representing how CSS handles things.
