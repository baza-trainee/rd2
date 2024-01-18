import prevIcon from "assets/images/partners/Icon.png";
import nextIcon from "assets/images/partners/Icon-2.png";
import { PartnersButtonNav } from "components/About/Partners/PartnersButtonNav/PartnersButtonNav";
import { SwiperContainer } from "components/About/Partners/PartnersSlider/PartnersSlider.styled";
import { PartnersSlideList } from "components/About/Partners/PartnersSlideList/PartnersSlideList";

import "swiper/css";

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
