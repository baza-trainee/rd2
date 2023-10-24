import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Container} from "@mui/material";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import {CarouselWrap, SlideContainer, SlideContent} from "./Carousel.styled";


export const Carousel = () => {
  return (
    <CarouselWrap>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper:any) => console.log(swiper)}// !!!!!!!!!!!!!!!!!!!!!! type Any
      >
        <SwiperSlide >
          <SlideContainer>
            <Container maxWidth="xl">
              <SlideContent>


                <Typography variant="h2"
                  component="h2"
                  color="secondary"
                  gutterBottom
                >
                                    Напрямки роботи ДП
                </Typography>

                <Typography variant="body1"
                  color="secondary"
                >
                                    Отримайте всі переваги членства в нашій організації -
                                    від інформації про заходи до швидкого рецензування
                                    наукових робіт
                </Typography>

                <Button variant="contained">підтримати</Button>


              </SlideContent>
            </Container>
          </SlideContainer>

        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundColor: "red"}}>
            <Container maxWidth="xl">
              <div style={{border: "5px solid blue"}}>
                                Slide 2
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundColor: "grey"}}>
            <Container maxWidth="xl">
              <div style={{border: "5px solid blue"}}>
                                Slide 3
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>

    </CarouselWrap>
  );
};