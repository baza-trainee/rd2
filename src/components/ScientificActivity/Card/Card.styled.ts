import styled from "@emotion/styled";

const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }
`;

const CardTextWrap = styled.div`
  width: 328px;
  padding: 24px;

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (min-width: 1440px) {
    width: 668px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CardTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 0;
  font-size: 16px;
  text-transform: uppercase;

  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

const CardText = styled.p`
  @media (min-width: 1440px) {
    font-size: 18px;
  }`;

const ActivityImg = styled.img`
  display: block;
  width: 328px;
  height: 279px;
  margin-bottom: 74px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 340px;
    height: 289px;
  }
  @media (min-width: 1440px) {
    width: 668px;
    height: 560px;
  }
`;

export { Cards, CardTitle, CardTextWrap, CardText, ActivityImg };
