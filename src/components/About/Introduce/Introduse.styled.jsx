import styled from "@emotion/styled";

import { theme } from "theme/theme";

const bgColor = theme.palette.secondary.main;

const Container = styled.section`
  width: 100%;
  background-color: ${bgColor};
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 72px;

  width: 360px;
  padding: 72px 16px;
  margin: 0 auto;
  @media (min-width: 768px) {
    row-gap: 24px;

    width: 768px;
    padding: 80px 32px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 121px 40px 120px 40px;
  }
`;
const ItemWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }
  @media (min-width: 1440px) {
    column-gap: 115px;
  }
`;
const Pictures = styled.div`
  margin-bottom: 40px;
  
  & img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const Text = styled.p`
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 768px) {
    width: 340px;
  }
  @media (min-width: 1440px) {
    width: 483px;
    font-size: 18px;
  }
`;
const Text2 = styled.p`
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 768px) {
    width: 340px;
  }
  @media (min-width: 1440px) {
    width: 483px;
    margin-left: 145px;
    margin-right: 16px;

    font-size: 18px;
  }
`;
export { Container, SectionWrapper, ItemWrapper, Pictures, Text, Text2 };
