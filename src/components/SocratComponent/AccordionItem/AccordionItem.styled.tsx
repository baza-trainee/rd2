import styled from "@emotion/styled";

const AccordionHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;
const AccordionItemWrap = styled.div`
  width: 328px;
  padding: 12px;
  background-color: #fff;
  border-radius: 12px;
  @media (min-width: 768px) {
    width: 522px;
    padding: 24px;
  }
  @media (min-width: 1440px) {
    width: 1013px;
    padding: 50px;
  }
`;
const AccordionHeader = styled.h2`
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
const AccordionButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 24px;
  background-color: inherit;
  @media (min-width: 1440px) {
    width: 50px;
`;
const Img = styled.img`
  width: 24px;
  @media (min-width: 1440px) {
    width: 50px;
  }
`;
const AccordionBody = styled.div`
  width: 275px;
  @media (min-width: 768px) {
    width: 445px;
  }
  @media (min-width: 1440px) {
    width: 858px;
  }
`;
const AccordionCollapse = styled.div`
  height: 0;
  overflow: hidden;
  transition: 500ms;
`;

export {
    AccordionItemWrap,
    AccordionHeader,
    AccordionButton,
    AccordionBody,
    AccordionCollapse,
    AccordionHeaderWrapper,
    Img,
};