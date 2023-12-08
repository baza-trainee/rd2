import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;
const SectionWrapper = styled.div`
  width: 360px;
  padding: 72px 16px;
  margin: 0 auto;
  &:first-child {
    padding-top: 0;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 80px 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 120px 40px;
  }
`;

export { Container, SectionWrapper };
