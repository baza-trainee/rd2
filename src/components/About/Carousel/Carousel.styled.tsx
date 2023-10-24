import styled from "@emotion/styled";

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
    //left: calc(100% - 1140px-40px);
    left: 40px
  }
  & .swiper-button-next {
    right: 40px;
  }
  & .swiper-button-disabled {
    display: none;
  }
`;
const SlideContainer = styled.div`
  background-color: #d5d5d5;
  height: 640px;
`;

const SlideContent = styled.div`
  padding-top: 20%;//277
  margin-left: 8%;//115
  width: 425px;
  
  p {
    margin-bottom: 25px;
  }
`;

export {CarouselWrap, SlideContainer, SlideContent};