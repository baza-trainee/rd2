import styled from "@emotion/styled";

const DescWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    align-items: stretch;
  }
  @media (min-width: 1280px) {
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
  @media (min-width: 1280px) {
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
  @media (min-width: 1280px) {
    margin: 5px 32px;
  }
`;

const Desc = styled.p`
  @media (min-width: 768px) {
    align-self: center;
    width: 396px;
  }
  @media (min-width: 1280px) {
    width: 760px;
  }
`;

export { DescWrap, Title, Divider, Desc };
