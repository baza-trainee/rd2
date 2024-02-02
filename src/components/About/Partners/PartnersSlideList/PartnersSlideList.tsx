import {useContext, useEffect} from "react";
import { useQuery } from "react-query";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { loadData } from "api/requests/loadData";
import { fetchLogosList } from "api/requests/partnersLogo";
import { handleSlideToDisplay } from "helpers/handleSlideToDisplay";
import { PartnersLogos } from "types/typePartnersLogos";
import { mapPartnersLogos } from "helpers/mapPartnersLogos";
import { theme } from "theme/theme";
import { partners } from "components/About/Partners/PartnersSlider/partnersList";
import { PartnersCard } from "components/About/Partners/PartnersCard/PartnersCard";

import "swiper/css";

import {CacheContext} from "../../../../App";

export const PartnersSlideList = () => {

  const isCache = useContext(CacheContext);

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
    enabled: !isCache.cache.logosIsLoaded,
  });

  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

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

  useEffect(() => {

    if ( !isCache.cache.logosIsLoaded ) {
      isCache.setCache({...isCache.cache, logosIsLoaded: true})
    }
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      breakpoints={{
        1280: {
          spaceBetween: 32,
        },
      }}
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
