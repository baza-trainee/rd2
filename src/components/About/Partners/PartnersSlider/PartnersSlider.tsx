import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

import { theme } from "theme/theme";
import prevIcon from "assets/images/partners/Icon.png";
import nextIcon from "assets/images/partners/Icon-2.png";
import { handleSlideToDisplay } from "helpers/handleSlideToDisplay";
import { IPartners } from "components/About/Partners/Partners/partnersList";
import { PartnersButtonNav } from "components/About/Partners/PartnersButtonNav/PartnersButtonNav";
import { PartnersCard } from "components/About/Partners/PartnersCard/PartnersCard";

import { SwiperContainer } from "components/About/Partners/PartnersSlider/PartnersSlider.styled";
import "swiper/css";

interface Props {
  partnersList: IPartners[];
}

export const PartnersSlider = ({ partnersList }: Props) => {
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  const numToDisplay = handleSlideToDisplay(isSm, isMd, isXl);

  const prevButton = isMd && <PartnersButtonNav imageSrc={prevIcon} prev />;
  const nextButton = isMd && <PartnersButtonNav imageSrc={nextIcon} next />;
  return (
    <SwiperContainer>
      {prevButton}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={numToDisplay}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {partnersList.map(({ id, imageSrc, retinaImageSrc }) => (
          <SwiperSlide key={id}>
            <PartnersCard imageSrc={imageSrc} retinaImageSrc={retinaImageSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
      {nextButton}
    </SwiperContainer>
  );
};
