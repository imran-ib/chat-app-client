import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";
import { generateMedia } from "styled-media-query";
import reset from "styled-reset";

export const theme = {
  purple: "#7512ff",
  dark: "#0a0f21",
  navy: "#001f3f",
  blue: "#0074D9",
  aqua: "#7FDBFF",
  teal: "#39CCCC",
  olive: "#3D9970",
  green: "#2ECC40",
  lime: "#01FF70",
  yellow: "#FFDC00",
  orange: "#FF851B",
  red: "#FF4136",
  maroon: "#85144b",
  fuchsia: "#F012BE",
  purpleDark: "#B10DC9",
  black: "#111111",
  gray: "#AAAAAA",
  silver: "#DDDDDD",
  ebony: "#282C35",
  fontColor: "#c9c9c9",
  // Site Colors
  MainBgColor: "#292F3F",
  MainSiteFontColor: "#828282",
};
declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
 ${reset}
 html { 
  overflow: hidden;
  font-size: 10px;
  height: 100%;
}

    body {
      overflow-x: hidden !important;
      background-color:#292F3F;
      color:#828282;
      font-size: 1.6rem;
      
       /* Scroll bar */
  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

      

    }
    a{
      text-decoration: none !important;
      color: #ff1d6e;
      cursor: pointer;
  
        &:hover {
          color :  #c9c9c9;
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



  `;

export const customMedia = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
});
