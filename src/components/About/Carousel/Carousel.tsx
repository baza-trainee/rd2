import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Container} from "@mui/material";

import {CarouselWrap, SlideContainer} from "./Carousel.styled";
import { CarouselSlideList } from "./CarouselSlideList";

import {SlideInfo} from "./SlideInfo";

const SlideList = CarouselSlideList.map((slide, index) => (
  <SwiperSlide key={slide.title+index}>

    <SlideContainer src={slide.imgSrc} retinaSrc={slide.retinaImgSrc}>
      <Container maxWidth="xl">
        <SlideInfo title={slide.title} description={slide.description}/>
      </Container>
    </SlideContainer>

  </SwiperSlide>
));


export const Carousel = () => {
  return (
    <CarouselWrap>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >

        {SlideList}

      </Swiper>

    </CarouselWrap>
  );
};