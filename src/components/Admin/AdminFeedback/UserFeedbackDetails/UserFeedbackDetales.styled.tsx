import styled from "@emotion/styled";

import {theme} from "../../../../theme/theme";

const borderColor = theme.palette.primary.main
const MessageBlock = styled.div`
  margin-bottom: 20px;
  padding-top: 20px;
  
  border-top: 1px solid ${borderColor};
`;

const MessageDateBlock = styled.div`
margin-bottom: 10px
`;

export {MessageBlock, MessageDateBlock}