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
    padding: 80px 40px 120px 40px;
  }
`;

const Title = styled.h1`
  font-family: Open Sans;
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
  font-family: Open Sans;
  width: 328px;
  @media (min-width: 768px) {
    width: 420px;
  }
  @media (min-width: 1440px) {
    width: 813px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  @media (min-width: 768px) {
    row-gap: 40px;
  }
  @media (min-width: 1440px) {
    row-gap: 24px;
  }
`;

const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }
  @media (min-width: 1440px) {
  }
`;

const CardTextWrap = styled.div`
width: 328px
height: 277px;
padding: 24px;

   @media (min-width: 768px) {
    
    width: 340px;
    height: 289px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    overflow: scroll;
    overflow-x: hidden;
  }
  @media (min-width: 1440px) {
  
    width: 668px;
    height: 560px;

     display: flex;
    flex-direction: column;
    justify-content: center;
  

  }
`;

const CardTitle = styled.h2`
  font-family: Open Sans;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 0px;
  font-size: 16px;

  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

const CardText = styled.p`
  font-family: Open Sans;
`;

const ActivityImg = styled.img`
  display: block;
  width: 328px;
  height: 279px;
  margin-bottom: 74px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 340px;
    height: 289px;
  }
  @media (min-width: 1440px) {
    width: 668px;
    height: 560px;
  }
`;

export {
  Container,
  Divider,
  Title,
  SectionWrapper,
  TitleWrap,
  TitleText,
  ActivityImg,
  CardTitle,
  CardTextWrap,
  Cards,
  CardWrapper,
  CardText,
};
