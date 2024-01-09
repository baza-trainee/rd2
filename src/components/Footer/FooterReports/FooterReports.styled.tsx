import styled from "@emotion/styled";

import {theme} from "../../../theme/theme";

const hoverLinkColor = theme.palette.primary.dark;

export const RulesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const RulesItem = styled.li`
    text-decoration: underline;
    text-underline-offset: 6px;
    
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    &:hover {
        cursor: pointer;
        color: ${hoverLinkColor};
    }
`;