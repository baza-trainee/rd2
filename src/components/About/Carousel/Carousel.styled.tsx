import styled from "@emotion/styled";

import { theme } from "theme/theme";

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
    left: 9px;
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    font-size: 24px;
    color: ${arrowColor};
  }

  & .swiper-button-next {
    right: 9px;
  }

  @media (min-width: 468px) {
    & .swiper-button-prev {
      left: 5px;
    }
    & .swiper-button-next {
      right: 5px;
    }
  }

  @media (min-width: 768px) {
    & .swiper-button-prev {
      left: 32px;
    }
    & .swiper-button-next {
      right: 32px;
    }
    & .swiper-button-prev:after,
    & .swiper-button-next:after {
      font-size: 44px;
    }
  }

  @media (min-width: 1280px) {
    & .swiper-button-prev {
      left: 40px;
    }
    & .swiper-button-next {
      right: 40px;
    }
  }

  & .swiper-button-disabled {
    display: none;
  }
`;

export { CarouselWrap };
