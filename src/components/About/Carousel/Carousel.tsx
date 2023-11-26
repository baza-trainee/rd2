import { Swiper, SwiperSlide } from "swiper/react";
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
      >
        {carouselSlideList.map(
          ({ id, titleKey, descriptionKey, retinaImgSrc, imgSrc }) => (
            <SwiperSlide key={id}>
              <SlideItem
                title={t(titleKey)}
                desc={t(descriptionKey)}
                imgSrc={imgSrc}
                retinaImgSrc={retinaImgSrc}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </CarouselWrap>
  );
};
