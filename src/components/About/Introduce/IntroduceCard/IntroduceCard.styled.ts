import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    column-gap: 124px;
  }
`;
const Pictures = styled.div`
  height: 332px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    height: 400px;
    margin-bottom: 0;
    flex: 1 1 50%;
  }

  @media (min-width: 1440px) {
    height: 483px;
  }

  & img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.p`
  margin: 0 auto;
  font-weight: 400;
  line-height: 150%;

  &:nth-child(odd) {
    padding-left: 24px;
  }

  &:nth-child(even) {
    padding-right: 24px;
  }

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
  @media (min-width: 1440px) {
    width: 530px;
    font-size: 18px;

    &:nth-child(odd) {
      padding-left: 115px;
    }

    &:nth-child(even) {
      padding-right: 115px;
    }
  }
`;

export { Card, Pictures, Text };
