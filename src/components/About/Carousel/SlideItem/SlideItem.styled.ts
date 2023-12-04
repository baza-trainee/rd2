import styled from "@emotion/styled";

type SlideContainerProps = {
  imgSrc?: string;
  retinaImgSrc?: string;
};

const SlideContainer = styled.div<SlideContainerProps>`
  position: relative;
  height: 640px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imgSrc});
  background-color: #8293a3;

  & .MuiButton-root {
    position: absolute;
    bottom: 78px;
    margin: 0;
    width: calc(100% - 32px);
  }

  @media (min-resolution: 2dppx) {
    background-image: url(${(props) => props.retinaImgSrc});
  }

  @media (min-width: 468px) {
    height: 450px;
    background-position: 30%;

    & .MuiButton-root {
      position: static;
      width: auto;
    }
  }

  @media (min-width: 768px) {
    background-position: center;
  }

  @media (min-width: 1280px) {
    height: 640px;
  }
`;

export { SlideContainer };
