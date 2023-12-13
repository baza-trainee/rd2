import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .swiper-slide {
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: center;
    }
  }
`;
