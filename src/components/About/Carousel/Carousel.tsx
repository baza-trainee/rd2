import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Container} from "@mui/material";

import {useTranslation} from "react-i18next";


import {CarouselWrap, SlideContainer} from "./Carousel.styled";
import { carouselSlideList } from "./carouselSlideList";

import {SlideInfo} from "./SlideInfo";

type SlideItemProps = {
  title: string,
  desc: string,
  imgSrc: string,
  retinaImgSrc: string
}

const SlideItem = ({title, desc, imgSrc, retinaImgSrc}: SlideItemProps) => (

            <SlideContainer
                imgSrc={imgSrc}
                retinaImgSrc={retinaImgSrc}
            >
                <Container maxWidth="xl">
                    <SlideInfo
                        title={title}
                        description={desc}
                    />
                </Container>
            </SlideContainer>

)


export const Carousel = () => {

  const { t } = useTranslation();

  return (
    <CarouselWrap>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >

          {
              carouselSlideList.map((slide, index) => (
                <SwiperSlide key={slide.titleKey+index}>

                  <SlideItem
                     title={ t(slide.titleKey) }
                     desc={ t(slide.descriptionKey) }
                     imgSrc={slide.imgSrc}
                     retinaImgSrc={slide.retinaImgSrc}
                  />

                </SwiperSlide>

              ))
          }

      </Swiper>

    </CarouselWrap>
  );
};