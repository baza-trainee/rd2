import React from "react";

import { useQuery } from "react-query";

import { useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import { loadData } from "../../../../api/loadData";

import { fetchLogosList } from "../../../../api/partnersLogo";

import "swiper/css";

import { PartnersCard } from "../PartnersCard/PartnersCard";

import { theme } from "../../../../theme/theme";

import { handleSlideToDisplay } from "../../../../helpers/handleSlideToDisplay";

import { partners } from "../PartnersSlider/partnersList";
import { PartnersLogos } from "../../../../types/typePartnersLogos";
import { mapPartnersLogos } from "../../../../helpers/mapPartnersLogos";

export const PartnersSlideList = () => {
  const { isError, isSuccess, data } = useQuery({
    queryKey: ["logosList"],
    queryFn: async () => {
      try {
        const data = await loadData(fetchLogosList)();
        return mapPartnersLogos(data);
      } catch (e) {
        throw e;
      }
    },
    placeholderData: partners,
  });

  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
  //const isBolowMd = useMediaQuery(theme.breakpoints.down("md"));

  const numToDisplay = handleSlideToDisplay(isAboveMd, isAboveLg);

  let slideList;

  if (isError) {
    slideList = partners.map((item) => (
      <SwiperSlide key={item.id}>
        <PartnersCard imageSrc={item.src} />
      </SwiperSlide>
    ));
  }

  if (isSuccess) {
    slideList = data.map((slideInfo: PartnersLogos) => (
      <SwiperSlide key={slideInfo.id}>
        <PartnersCard imageSrc={slideInfo.src} />
      </SwiperSlide>
    ));
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      breakpoints={{
        1280: {
          spaceBetween: 32,
        },
      }}
      //centeredSlides={isBolowMd}
      slidesPerView={numToDisplay}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      {slideList}
    </Swiper>
  );
};
