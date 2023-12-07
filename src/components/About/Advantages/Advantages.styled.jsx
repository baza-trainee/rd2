import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;
const SectionWrapper = styled.div`
  width: 360px;
  padding: 72px 16px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
    padding: 80px 32px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 120px 40px;
  }
`;
const DescWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    align-items: stretch;
  }
  @media (min-width: 1440px) {
    padding: 12px 0;
    margin-bottom: 60px;
  }
`;
const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  @media (min-width: 768px) {
    width: 260px;
    align-self: center;
    text-align: start;
  }
  @media (min-width: 1440px) {
    width: 367px;
  }
`;
const Divider = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #151515;
  @media (min-width: 768px) {
    display: block;
    width: 1px;
    height: auto;
    margin: 5px 24px;
  }
  @media (min-width: 1440px) {
    margin: 5px 32px;
  }
`;
const Desc = styled.p`
  @media (min-width: 768px) {
    width: 396px;
    align-self: center;
  }
  @media (min-width: 1440px) {
    width: 760px;
  }
`;

export { Container, DescWrap, Divider, Desc, Title, SectionWrapper };
