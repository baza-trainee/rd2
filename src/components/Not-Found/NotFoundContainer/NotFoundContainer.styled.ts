import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* width: 360px; */
  padding-block: 20px 16px;
  /* padding: 20px 16px 108px 16px; */
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    /* width: 768px; */
    padding-block: 80px 94px;
    /* padding: 80px 184px 94px; */
  }
  @media (min-width: 1280px) {
    /* width: 1280px; */
    padding-block: 60px 94px;
    /* padding: 60px 521px 94px; */
  }
`;

export { Container, SectionWrapper };
