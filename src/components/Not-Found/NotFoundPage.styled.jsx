import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 360px;
  padding: 20px 16px 108px 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 80px 184px 94px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 60px 521px 94px;
  }
`;

const Drone = styled.img`
  width: 250px;
  height: 84px;

  @media (min-width: 768px) {
    width: 358px;
    height: 120px;
  }
`;

const Picture = styled.picture`
  margin-top: -18px;
  margin-left: 5px;
  position: relative;
  z-index: 300;

  @media (min-width: 768px) {
    margin-top: -22px;
    margin-left: 7px;
  }
`;

const Numb = styled.img`
  width: 176px;
  height: 72px;

  margin-top: -100px;
  margin-bottom: 68px;

  @media (min-width: 768px) {
    width: 244px;
    height: 100px;

    margin-top: -130px;
  }
`;

const Text = styled.p`
  color: var(--Black, #151515);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Text2 = styled.p`
  color: var(--Black, #151515);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 42px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

const Button = styled.button`
  display: flex;
  width: 328px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #4285f4;

  cursor: pointer;
  border: none;

  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: #f5f5f5;

  @media (min-width: 768px) {
    width: 398px;
    font-size: 18px;
  }
`;

export { Container, SectionWrapper, Drone, Numb, Text, Text2, Button, Picture };
