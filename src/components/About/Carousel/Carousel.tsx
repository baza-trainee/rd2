import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import slide1Img from "assets/images/carousel/flying-drone-background1.jpg";
import slide1ImgRet from "assets/images/carousel/flying-drone-background1@2x.jpg";
import slide2Img from "assets/images/carousel/flying-drone-background2.jpg";
import slide2ImgRet from "assets/images/carousel/flying-drone-background2@2x.jpg";
import slide3Img from "assets/images/carousel/flying-drone-background3.jpg";
import slide3ImgRet from "assets/images/carousel/flying-drone-background3@2x.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Container} from "@mui/material";

import {CarouselWrap, SlideContainer} from "./Carousel.styled";
import { carouselSlideList } from "./carouselSlideList";

import {SlideInfo} from "./SlideInfo";

const SlideList = carouselSlideList.map((slide, index) => (
  <SwiperSlide key={slide.title+index}>

    <SlideContainer imgSrc={slide.imgSrc}
                    retinaImgSrc={slide.retinaImgSrc}
                    //style={{backgroundImage: `url(${slide.imgSrc})`}}
    >
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