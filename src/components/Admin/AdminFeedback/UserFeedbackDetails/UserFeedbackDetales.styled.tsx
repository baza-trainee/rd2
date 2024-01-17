import styled from "@emotion/styled";

import { theme } from "theme/theme";
import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";

const borderColor = theme.palette.primary.main;

const PageContentWrapperStyled = styled(PageContentWrapper)`
  overflow: auto;
`;
const MessageBlock = styled.div`
  margin-bottom: 20px;
  padding-top: 20px;

  border-top: 1px solid ${borderColor};
`;

const MessageDateBlock = styled.div`
  margin-bottom: 10px;
`;

export { MessageBlock, MessageDateBlock, PageContentWrapperStyled };
