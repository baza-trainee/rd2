import styled from "@emotion/styled";

import { theme } from "theme/theme";

const bgColor = theme.palette.secondary.main;

const PageWrapper = styled.div`
  padding: 50px 0 20px;
  background-color: ${bgColor};

  @media (min-width: 768px) {
    padding: 120px 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto;
  max-width: 900px;

  @media (min-width: 1280px) {
    max-width: 100%;
  }
`;

export { ContentWrapper, PageWrapper };
