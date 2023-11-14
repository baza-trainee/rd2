import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
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
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
  }
`;
const Text = styled.p`
  color: #151515;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 768px) {
    width: 340px;
  }
  @media (min-width: 1440px) {
    width: 483px;
  }
`;
const Text2 = styled.p`
  color: #151515;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 768px) {
    width: 340px;
  }
  @media (min-width: 1440px) {
    width: 483px;
    margin-left: 145px;
    margin-right: 16px;
  }
`;
export { Container, SectionWrapper, ItemWrapper, Pictures, Text, Text2 };
