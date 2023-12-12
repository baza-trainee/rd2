import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typography, useMediaQuery } from "@mui/material";

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
  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
  const isBolowMd = useMediaQuery(theme.breakpoints.down("md"));

  const numToDisplay = handleSlideToDisplay(partnersList.length, isAboveMd, isAboveLg);

  const prevButton = <PartnersButtonNav imageSrc={prevIcon} prev />;
  const nextButton = <PartnersButtonNav imageSrc={nextIcon} next />;

  return (
    <SwiperContainer>
      {prevButton}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        centeredSlides={isBolowMd}
        slidesPerView={numToDisplay}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {partnersList.length < 1 && (
          <Typography>Тут будуть логотипи наших партнерів</Typography>
        )}

        {partnersList.length >= 1 &&
          partnersList.map(({ id, imageSrc }) => (
            <SwiperSlide key={id}>
              <PartnersCard imageSrc={imageSrc} />
            </SwiperSlide>
          ))}
      </Swiper>
      {nextButton}
    </SwiperContainer>
  );
};
