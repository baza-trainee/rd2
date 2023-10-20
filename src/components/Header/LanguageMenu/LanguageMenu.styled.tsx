import styled from "@emotion/styled";

interface LanguageMenuWrapProp {
    opened: boolean
}
const LanguageMenuWrap = styled.div<LanguageMenuWrapProp>`
    & button {
      width: 80px;
      
      font-size: 1rem;
      color: #151515;
      
      & svg {
        transform: ${props => (props.opened ? "rotate(180deg)" : "rotate(0deg)")};
        transition: transform 300ms
      }
    }
`;

export {LanguageMenuWrap};