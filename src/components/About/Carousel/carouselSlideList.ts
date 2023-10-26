/* eslint-disable max-len */

//import slide1ImgRet from "assets/images/carousel/flying-drone-background1@2x.jpg";

//import slide2ImgRet from "assets/images/carousel/flying-drone-background2@2x.jpg";

//import slide3ImgRet from "assets/images/carousel/flying-drone-background3@2x.jpg";

import slideOneImg from "../../../assets/images/carousel/drone-background-1.jpg";
import slideTwoImg from "../../../assets/images/carousel/drone-background-2.jpg";
import slideThreeImg from "../../../assets/images/carousel/drone-background-3.jpg";

import {CarouselSlide} from "../../../types/typeCarousel";


const carouselSlideList: CarouselSlide[] = [
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slideOneImg,
    //retinaImgSrc: slide1ImgRet,
  },
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slideTwoImg,
    //retinaImgSrc: slide2ImgRet,
  },
  {
    title: "Напрямки роботи ДП",
    description: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    imgSrc: slideThreeImg,
    //retinaImgSrc: slide3ImgRet,
  },
];

export {carouselSlideList};