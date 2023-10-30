import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import { theme } from "theme/theme";

import prevIcon from "assets/images/partners/Icon.png";
import nextIcon from "assets/images/partners/Icon-2.png";

import { IPartners } from "components/About/Partners/partnersList";

import { SwiperButtonNav } from "../PartnersButtonNav/PartnersButtonNav";
import { PartnersCard } from "../PartnersCard/PartnersCard";

import { SwiperContainer } from "./PartnersSlider.styled";
import "swiper/css";

interface Props {
  partnersList: IPartners[];
}

export const PartnersSlider: FC<Props> = ({ partnersList }) => {
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  let numToDisplay = 1.5;

  if (isXl) {
    numToDisplay = 5.5;
  } else if (isMd) {
    numToDisplay = 2.8;
  } else if (isSm) {
    numToDisplay = 1.5;
  }

  const prevButton = (isMd || isXl) && <SwiperButtonNav imageSrc={prevIcon} prev />;
  const nextButton = (isMd || isMd) && <SwiperButtonNav imageSrc={nextIcon} next />;
  return (
    <SwiperContainer>
      {prevButton}
      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={numToDisplay}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {partnersList.map(({ id, imageSrc, retinaImageSrc }) => (
          <SwiperSlide style={{ maxWidth: "fit-content" }} key={id}>
            <PartnersCard imageSrc={imageSrc} retinaImageSrc={retinaImageSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
      {nextButton}
    </SwiperContainer>
  );
};
