import OpenSansRegularWoff2 from "assets/fonts/OpenSans-Regular.woff2";
import OpenSansRegularWoff from "assets/fonts/OpenSans-Regular.woff";
import OpenSansSemiBoldWoff2 from "assets/fonts/OpenSans-SemiBold.woff2";
import OpenSansSemiBoldWoff from "assets/fonts/OpenSans-SemiBold.woff";
import OpenSansBoldWoff2 from "assets/fonts/OpenSans-Bold.woff2";
import OpenSansBoldWoff from "assets/fonts/OpenSans-Bold.woff";

export const globalOverrides = `
             a {
                text-decoration: none;
            } 
            a: active {
                color: inherit;
            }
            h2, h3, h4, h5 {
                margin: 0;
                font-weight: 600;
            }
            h1 {
                margin: 0;
                font-weight: 700;
            }
            h2 {
                font-size: 2rem;
            }
            p {
                margin: 0
            }
            address {
                font-style: normal;
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
            @media (min-width: 1280px) {
                h1 {
                    font-size: 4rem;
                }
                h2 {
                   font-size: 2.5rem;
                }
                h3 {
                   font-size: 2rem;
                }
                h4 {
                   font-size: 1.5rem;     
                }
            }
        `;
