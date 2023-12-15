import styled from "@emotion/styled";

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
  color: #151515;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Text2 = styled.p`
  color: #151515;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 42px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

export { Drone, Numb, Text, Text2, Picture };
