import styled from "@emotion/styled";

import {theme} from "../../../theme/theme";

const hoverLinkColor = theme.palette.primary.dark;

const AddressItem = styled.p`
  display: flex;
  gap: 4px;
  text-transform: none;
`;

const StyledLink = styled.a`
    color: inherit;
    
    &:hover {
        //color: ${hoverLinkColor};
    }
`;

export {AddressItem, StyledLink};