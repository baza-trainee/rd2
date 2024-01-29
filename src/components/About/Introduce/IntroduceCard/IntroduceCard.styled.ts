import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 24px;

    &:nth-of-type(2n) p{
        padding-left: 24px;
    }

    &:nth-of-type(2n+1) p{
        padding-right: 24px;
    }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    column-gap: 124px;

    &:nth-of-type(2n) p{
          padding-left: 115px;
    }

    &:nth-of-type(2n+1) p{
          padding-right: 115px;
    }  
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

  @media (min-width: 1280px) {
    height: 400px;
  }

  & img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 24px;  
  }
`;
const Text = styled.p`
  margin: 0 auto;
  font-weight: 400;
  line-height: 150%;

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
  @media (min-width: 1280px) {
    width: 530px;
    font-size: 18px;
  }
`;

export { Card, Pictures, Text };
