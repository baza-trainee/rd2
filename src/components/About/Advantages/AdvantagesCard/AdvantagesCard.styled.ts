import styled from "@emotion/styled";

const AdvantageCard = styled.li`
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 1440px) {
    display: block;
    width: calc((100% - 32px) / 3);
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

const AdvantageImgBox = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 768px) and (max-width: 1439.5px) {
    width: 340px;
    height: 240px;
  }
`;
const AdvantageImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;
const AdvantageDescBox = styled.div`
  flex: 1;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  @media (min-width: 768px) {
    height: auto;
    padding: 16px 16px 27px 40px;
  }
  @media (min-width: 1440px) {
    height: 100%;
    padding: 24px 24px 68px 24px;
  }
`;
const AdvantageTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
`;

export { AdvantageCard, AdvantageDescBox, AdvantageImg, AdvantageImgBox, AdvantageTitle };
