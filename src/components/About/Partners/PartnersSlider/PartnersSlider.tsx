import React from "react";

import prevIcon from "assets/images/partners/Icon.png";
import nextIcon from "assets/images/partners/Icon-2.png";

import { PartnersButtonNav } from "components/About/Partners/PartnersButtonNav/PartnersButtonNav";

import { SwiperContainer } from "components/About/Partners/PartnersSlider/PartnersSlider.styled";

import "swiper/css";
import { PartnersSlideList } from "../PartnersSlideList/PartnersSlideList";

export const PartnersSlider = () => {
  const prevButton = <PartnersButtonNav imageSrc={prevIcon} prev />;
  const nextButton = <PartnersButtonNav imageSrc={nextIcon} next />;

  return (
    <SwiperContainer>
      {prevButton}
      <PartnersSlideList />
      {nextButton}
    </SwiperContainer>
  );
};
