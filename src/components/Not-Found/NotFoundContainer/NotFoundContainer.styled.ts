import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 20px 16px;

  @media (min-width: 768px) {
    padding-block: 80px 94px;
  }

  @media (min-width: 1280px) {
    padding-block: 60px 94px;
  }
`;

export { Container, SectionWrapper };
