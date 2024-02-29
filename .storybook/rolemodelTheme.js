import { create } from '@storybook/theming/create'
import logoUrl from './public/optics-logo.svg'

export default create({
  base: 'light',
  brandTitle: 'Optics, a RoleModel Design System',
  brandUrl: 'https://docs.optics.rolemodel.design/',
  brandImage: logoUrl,
  brandTarget: '_self',

  //
  colorprimary: '#333333',
  colorSecondary: '#336CC1',
})
