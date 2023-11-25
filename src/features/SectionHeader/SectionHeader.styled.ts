import styled from "@emotion/styled";

const DescWrap = styled.div`
 margin-bottom: 40px;

 @media (min-width: 768px) {
  display: flex;
 }
 @media (min-width: 1440px) {
  align-items: center;
  padding: 12px 0;
  margin-bottom: 60px;
 }
`;

const Title = styled.h2`
 margin: 0;
 font-size: 40px;
 font-weight: 600;
 text-align: center;
 @media (min-width: 768px) {
  width: 260px;
  text-align: start;
 }
 @media (min-width: 1440px) {
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
  height: 144px;
  margin: 0 24px;
 }
 @media (min-width: 1440px) {
  height: 66px;
  margin: 0 32px;
 }
`;

const Desc = styled.p`
 @media (min-width: 768px) {
  width: 396px;
 }
 @media (min-width: 1440px) {
  width: 760px;
 }
`;

export { DescWrap, Title, Divider, Desc };
