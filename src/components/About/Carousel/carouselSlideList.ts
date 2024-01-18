import slide1ImgRet from "assets/images/carousel/drone-background-1@2x.jpg";
import slide2ImgRet from "assets/images/carousel/drone-background-2@2x.jpg";
import slide3ImgRet from "assets/images/carousel/drone-background-3@2x.jpg";
import slide1Img from "assets/images/carousel/drone-background-1.jpg";
import slide2Img from "assets/images/carousel/drone-background-2.jpg";
import slide3Img from "assets/images/carousel/drone-background-3.jpg";
import { CarouselSlide } from "types/typeCarousel";

export const carouselSlideList: CarouselSlide[] = [
  {
    id: 1,
    titleKey: "about_us_carousel.0.title",
    descriptionKey: "about_us_carousel.0.desc",
    imgSrc: slide1Img,
    retinaImgSrc: slide1ImgRet,
  },
  {
    id: 2,
    titleKey: "about_us_carousel.1.title",
    descriptionKey: "about_us_carousel.1.desc",
    imgSrc: slide2Img,
    retinaImgSrc: slide2ImgRet,
  },
  {
    id: 3,
    titleKey: "about_us_carousel.2.title",
    descriptionKey: "about_us_carousel.2.desc",
    imgSrc: slide3Img,
    retinaImgSrc: slide3ImgRet,
  },
];
