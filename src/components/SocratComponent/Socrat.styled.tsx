import styled from "@emotion/styled";

import bcMob from "../../assets/images/socrat/Rectangle_mob-min.png";
import bcTab from "../../assets/images/socrat/Tab.png";
import bcDesk from "../../assets/images/socrat/desk-min.png";

const Container = styled.section`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${bcMob});
  margin-left: auto;
  margin-right: auto;

  padding: 60px 16px 42px 16px;

  //max-width: auto;

  height: auto;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-color: #f5f5f5;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url(${bcTab});
  }
  @media (min-width: 1440px) {
    padding-top: 120px;
    padding-bottom: 110px;
    background-image: url(${bcDesk});
  }
`;

const Picture = styled.picture`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;
const SocrstHeader = styled.h1`
  color: #151515;
  font-size: 32px;
  font-weight: 900;

  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 16px;
    font-size: 64px;
  }
`;
const TitleText = styled.p`
  width: 328px;
  color: #151515;
  font-size: 16px;
  font-weight: 600;

  margin-bottom: 46px;
  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    width: 672px;
    margin-bottom: 26px;
  }
`;
const SocratAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media (min-width: 768px) {
    row-gap: 24px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 24px;
  }
`;
const SocratAboutItem = styled.div`
  width: 328px;
  height: auto;

  border-radius: 16px;
  background: #fff;

  padding: 24px 20px;
  @media (min-width: 768px) {
    width: 522px;
    padding: 24px 34px;
  }
  @media (min-width: 1440px) {
    width: 361px;
    padding: 24px 24px;
  }
`;
const SocratAboutTitle = styled.h2`
  text-align: center;

  color: #151515;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
`;
const SocratAboutText = styled.p`
  text-align: start;
  color: #151515;
  font-size: 16px;
  font-weight: 400;
`;

const Accordion = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 72px 16px;
  row-gap: 32px;
  @media (min-width: 768px) {
    row-gap: 18px;
  }
  @media (min-width: 1440px) {
    row-gap: 32px;
  }
`;

export {
  Container,
  Accordion,
  Picture,
  SocrstHeader,
  TitleText,
  SocratAboutWrapper,
  SocratAboutItem,
  SocratAboutTitle,
  SocratAboutText,
};
