import slide1ImgRet from "assets/images/carousel/drone-background-1@2x.jpg";
import slide1ImgRetMobile from "assets/images/carousel/drone-background-1_mobile@2x.jpg";

import slide2ImgRet from "assets/images/carousel/drone-background-2@2x.jpg";
import slide2ImgRetMobile from "assets/images/carousel/drone-background-2_mobile@2x.jpg";

import slide3ImgRet from "assets/images/carousel/drone-background-3@2x.jpg";
import slide3ImgRetMobile from "assets/images/carousel/drone-background-3_mobile@2x.jpg";

import slide1Img from "assets/images/carousel/drone-background-1.jpg";
import slide1ImgMobile from "assets/images/carousel/drone-background-1_mobile.jpg";

import slide2Img from "assets/images/carousel/drone-background-2.jpg";
import slide2ImgMobile from "assets/images/carousel/drone-background-2_mobile.jpg";

import slide3Img from "assets/images/carousel/drone-background-3.jpg";
import slide3ImgMobile from "assets/images/carousel/drone-background-3_mobile.jpg";

import { CarouselSlide } from "types/typeCarousel";

export const carouselSlideList: CarouselSlide[] = [
  {
    id: 1,
    titleKey: "about_us_carousel.0.title",
    descriptionKey: "about_us_carousel.0.desc",
    imgSrc: slide1Img,
    imgMobileSrc: slide1ImgMobile,
    retinaImgSrc: slide1ImgRet,
    retinaImgMobileSrc: slide1ImgRetMobile,
  },
  {
    id: 2,
    titleKey: "about_us_carousel.1.title",
    descriptionKey: "about_us_carousel.1.desc",
    imgSrc: slide2Img,
    imgMobileSrc: slide2ImgMobile,
    retinaImgSrc: slide2ImgRet,
    retinaImgMobileSrc: slide2ImgRetMobile,
  },
  {
    id: 3,
    titleKey: "about_us_carousel.2.title",
    descriptionKey: "about_us_carousel.2.desc",
    imgSrc: slide3Img,
    imgMobileSrc: slide3ImgMobile,
    retinaImgSrc: slide3ImgRet,
    retinaImgMobileSrc: slide3ImgRetMobile,
  },
];
