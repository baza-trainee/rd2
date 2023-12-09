import styled from "@emotion/styled";

import { theme } from "theme/theme";

const bgColor = theme.palette.secondary.main;

const Container = styled.section`
  width: 100%;
  background-color: ${bgColor};
`;

const SectionWrapper = styled.div`
  width: 360px;
  padding: 72px 16px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
    padding: 80px 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 80px 40px 120px 40px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export { Container, SectionWrapper };
