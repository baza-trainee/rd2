import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & .swiper {
    width: 100%;
    @media (min-width: 1280px) {
      margin-left: 0;
    }
  }

  & .swiper-slide {

    width: auto;
    height: 140px;
    
  }

  @media screen and (max-width: 767px) {

    & .swiper-slide {
      display: flex;
      justify-content: center;
    }
    
  }
`;
