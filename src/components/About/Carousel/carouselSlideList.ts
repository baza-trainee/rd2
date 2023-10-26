/* eslint-disable max-len */
import slide1Img from "assets/images/carousel/flying-drone-background1.jpg";
import slide1ImgRet from "assets/images/carousel/flying-drone-background1@2x.jpg";
import slide2Img from "assets/images/carousel/flying-drone-background2.jpg";
import slide2ImgRet from "assets/images/carousel/flying-drone-background2@2x.jpg";
import slide3Img from "assets/images/carousel/flying-drone-background3.jpg";
import slide3ImgRet from "assets/images/carousel/flying-drone-background3@2x.jpg";

import {CarouselSlide} from "../../../types/typeCarousel";


const carouselSlideList: CarouselSlide[] = [
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slide1Img,
    retinaImgSrc: slide1ImgRet,
  },
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slide2Img,
    retinaImgSrc: slide2ImgRet,
  },
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slide3Img,
    retinaImgSrc: slide3ImgRet,
  },
];

export {carouselSlideList};