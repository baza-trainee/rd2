import { SwiperContainer } from "components/About/Partners/PartnersSlider/PartnersSlider.styled";
import { PartnersSlideList } from "components/About/Partners/PartnersSlideList/PartnersSlideList";
import { ButtonPrev } from "components/About/Partners/PartnersNavigationButtons/ButtonPrev";
import { ButtonNext } from "components/About/Partners/PartnersNavigationButtons/ButtonNext";

import "swiper/css";

export const PartnersSlider = () => {
  return (
    <SwiperContainer>
      <ButtonPrev />
      <PartnersSlideList />
      <ButtonNext />
    </SwiperContainer>
  );
};
