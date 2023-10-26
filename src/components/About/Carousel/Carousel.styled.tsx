
import styled from "@emotion/styled";

import {theme} from "../../../theme/theme";

const arrowColor = theme.palette.secondary.main;


const CarouselWrap = styled.div`
    & .swiper-pagination {
      bottom: 24px;
    }
  & .swiper-pagination-bullet {
    width: 14px;
    height: 14px;

    background: transparent;
    border: 3px solid white;
    opacity: 1;
  }
  & .swiper-pagination-bullet-active {
    background: white;
  }
  & .swiper-button-prev {
    left: 9px
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after
  {
    font-size: 24px;
    color: ${arrowColor};
  }

  & .swiper-button-next {
    right: 9px
  }

  @media (min-width: 468px) {
    & .swiper-button-prev {
      left: 5px
    }
    & .swiper-button-next {
      right: 5px
    }
  }
  
  @media (min-width: 768px) {
    & .swiper-button-prev {
      left: 40px
    }
    & .swiper-button-next {
      right: 40px
    }
    & .swiper-button-prev:after,
    & .swiper-button-next:after
    {
      font-size: 44px;
    }
  }
  & .swiper-button-disabled {
    display: none;
  }
`;

type SlideContainerProps = {
    imgSrc: string
    retinaImgSrc: string
}
const SlideContainer = styled.div<SlideContainerProps>`
  position: relative;
  height: 640px;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //background-image: url(${props => props.imgSrc});

  & .MuiButton-root {
    position: absolute;
    bottom: 78px;
    margin: 0;
    width: calc(100% - 32px);
  };
  
  @media (min-resolution: 2dppx) {
    //background-image: url(${props => props.retinaImgSrc});
  }

  @media (min-width: 468px) {
    height: 450px;
    background-position: 30%;

    & .MuiButton-root {
      position: static;
      width: auto;
    };
  }

  @media (min-width: 768px) {
    background-position: center;
  }

  @media (min-width: 1280px) {
    height: 640px;
  }
`;

const SlideContent = styled.div`
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
  }

  @media (min-width: 1280px) {
    padding-top: 20%;
    width: 425px;

    h1 {
      width: auto;
    }
  }
`;

export {CarouselWrap, SlideContainer, SlideContent};