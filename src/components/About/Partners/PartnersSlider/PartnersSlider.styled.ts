import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .swiper-slide {
    width: 213px!important;
    
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: center;
    }
  }
`;
