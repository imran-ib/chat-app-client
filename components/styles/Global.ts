import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";
import { generateMedia } from "styled-media-query";

export const theme = {};

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
 
    body {
      overflow-x: hidden !important;
    }
    a{
      text-decoration: none !important;
        color : #000;
        &:hover {
          color :  red;
        }
    }
    a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  .b-red{
    border: 1px solid red;
  }
  .b-blue{
    border: 1px solid blue;

  }
  .b-green{
    border: 1px solid green;
  }

  
  ;`;

export const customMedia = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
});
