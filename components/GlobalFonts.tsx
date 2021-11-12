import { url } from 'inspector';
import createGlobalStyle from 'styled-components'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Trixie Plain';
    font-style: normal;
    font-weight: 400;
    src: url("./assets/fonts/Trixie-Plain.otf") format('opentype')
  }`