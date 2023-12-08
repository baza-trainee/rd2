import styled from "@emotion/styled";

const AdvantageCard = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 24px;
  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 1280px) {
    flex-direction: column;
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
  @media (min-width: 768px) {
    flex: 1 0 50%;
  }
`;
const AdvantageImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;
const AdvantageDescBox = styled.div`
  flex: 1 1 50%;
  height: 100%;
  padding: 24px;
  background-color: #fff;
  @media (min-width: 768px) {
    height: auto;
    padding: 16px 16px 27px 40px;
  }
  @media (min-width: 1280px) {
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
