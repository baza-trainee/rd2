import styled from "@emotion/styled";

const Title = styled.h1`
  width: 328px;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  @media (min-width: 768px) {
    width: 214px;
    text-align: start;
  }
  @media (min-width: 1440px) {
    width: 395px;
  }
`;

const TitleWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1440px) {
    padding: 12px 0;
    margin-bottom: 74px;
  }
`;

const Divider = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 24px;
  background-color: #151515;
  @media (min-width: 768px) {
    display: block;
    width: 1px;
    height: 112px;
    margin: 0 35px;
  }
  @media (min-width: 1440px) {
    height: 72px;
    margin: 0 67px;
  }
`;

const TitleText = styled.p`
  width: 328px;
  @media (min-width: 768px) {
    width: 420px;
  }
  @media (min-width: 1440px) {
    width: 813px;
  }
`;

export { Divider, Title, TitleWrap, TitleText };
