import styled from "@emotion/styled";

import {theme} from "../../../theme/theme";

const bgrColor = theme.palette.secondary.main;
const textColor = theme.palette.primary.dark;
interface LanguageMenuWrapProp {
    opened: boolean
}
const LanguageMenuWrap = styled.div<LanguageMenuWrapProp>`
    & button {
      width: 80px;
      
      font-size: 1rem;
      color: #151515;
      background-color: ${props => (props.opened ? bgrColor : "transparent")};
      border-radius: 5px 5px 0 0;
      
      & svg {
        transform: ${props => (props.opened ? "rotate(180deg)" : "rotate(0deg)")};
        transition: transform 300ms
      }
    }
    & > button {
      &:hover {
        color: ${textColor};
        background-color: transparent;
      }
    }
  
  & li {
    padding: 30px 4px;
  }
`;

export {LanguageMenuWrap};