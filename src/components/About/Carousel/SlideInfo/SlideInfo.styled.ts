import styled from "@emotion/styled";

export const SlideContent = styled.div`
  padding-top: 10%;
  margin-left: 0;
  width: 100%;

  h1 {
    width: 230px;
  }

  p {
    margin-bottom: 25px;
  }

  @media (min-width: 468px) {
    width: 370px;
    margin-left: 32px;
  }

  @media (min-width: 768px) {
    margin-left: 8%;
    width: 500px;
  }

  @media (min-width: 1280px) {
    padding-top: 20%;

    h1 {
      width: auto;
    }
  }
`;
