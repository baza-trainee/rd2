import styled from "@emotion/styled";

import bgTab from "assets/images/contactForm/bg-desk.jpg";
import bgDesk from "assets/images/contactForm/bg-desk.jpg";

const Container = styled.section`
  position: relative;
  width: 100%;
  background: #c8dbe1;
  background-position: 50% 50%;
  background-size: auto 100%;
  @media (min-width: 768px) {
    background: #c8dbe1 url(${bgTab}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  @media (min-width: 1280px) {
    background: #c8dbe1 url(${bgDesk}) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
`;
const SectionWrapper = styled.div`
  position: relative;
  width: 360px;
  padding: 32px 16px 41px 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 768px;
    padding: 32px 32px 40px 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 40px 40px 60px 40px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
const Desc = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 229px;
    font-size: 24px;
    transform: translateY(-8px);
  }
  @media (min-width: 1280px) {
    width: 610px;
    margin-right: 20px;
    font-size: 32px;
    transform: translateY(0);
  }
`;
const Modal = styled.div`
  width: 328px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #1b3969;
  background: #fff;

  & > button {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  @media (min-width: 768px) {
    width: 446px;
    height: 202px;
  }
`;

const ModalText = styled.p`
  font-size: 14px;
  line-height: 150%;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export { Container, SectionWrapper, Desc, Modal, ModalText };
