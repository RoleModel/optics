export const createAlignedHeader = ({ example = 'badge' }) => {
  const badgeSuffix = "<div class='badge'>Aligned Badge</div>"
  const iconButtonSuffix = `<button class='btn btn--no-border btn--icon btn--pill btn--small'>
          <span class='material-symbols-outlined'>info</span>
        </button>`

  return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        ${example === 'badge' ? badgeSuffix : iconButtonSuffix}
      </span>
    </div>
  </div>
</div>
`
}
