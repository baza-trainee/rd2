import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";

import { CarouselWrap } from "components/About/Carousel/Carousel.styled";
import { SlideItem } from "components/About/Carousel/SlideItem/SlideItem";
import { carouselSlideList } from "components/About/Carousel/carouselSlideList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

        allowSlidePrev={false}
        onReachEnd={(swiper: SwiperClass) => swiper.allowSlideNext = false}
        onReachBeginning={(swiper: SwiperClass) => swiper.allowSlidePrev = false}

        onFromEdge={(swiper: SwiperClass) => {
            !swiper.allowSlideNext && (swiper.allowSlideNext = true);
            !swiper.allowSlidePrev && (swiper.allowSlidePrev = true);
        }}
      >
        {carouselSlideList.map(( slideItem, index ) => {
          const {id, titleKey, descriptionKey,
                 retinaImgSrc, imgSrc,
                 imgMobileSrc, retinaImgMobileSrc} = slideItem;

          return (
            <SwiperSlide key={id} >
                    <SlideItem
                        title={t(titleKey)}
                        desc={t(descriptionKey)}
                        imgSrc={imgSrc}
                        imgMobileSrc={imgMobileSrc}
                        retinaImgSrc={retinaImgSrc}
                        retinaImgMobileSrc={retinaImgMobileSrc}
                    />
            </SwiperSlide>
          )},
        )}
      </Swiper>
    </CarouselWrap>
  );
};
