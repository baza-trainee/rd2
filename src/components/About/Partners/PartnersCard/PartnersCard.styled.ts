import styled from "@emotion/styled";

export const Card = styled.div`
  width: auto;
  height: 140px;
  & > img {
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
    }
  }
`;
