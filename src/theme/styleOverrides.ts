import OpenSansRegularWoff2 from "../assets/fonts/OpenSans-Regular.woff2";
import OpenSansRegularWoff from "../assets/fonts/OpenSans-Regular.woff";
import OpenSansSemiBoldWoff2 from "../assets/fonts/OpenSans-SemiBold.woff2";
import OpenSansSemiBoldWoff from "../assets/fonts/OpenSans-SemiBold.woff";
import OpenSansBoldWoff2 from "../assets/fonts/OpenSans-Bold.woff2";
import OpenSansBoldWoff from "../assets/fonts/OpenSans-Bold.woff";

const globalOverrides = `
             a {
                text-decoration: none;
            } 
            a: active {
                color: inherit;
            }
            p {
                margin: 0
            }
            color: #151515;
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansRegularWoff2}) format('woff2'),
                   url(${OpenSansRegularWoff}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansSemiBoldWoff2}) format('woff2'),
                   url(${OpenSansSemiBoldWoff}) format('woff');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }    
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansBoldWoff2}) format('woff2'),
                   url(${OpenSansBoldWoff}) format('woff');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
        `;
export {globalOverrides};