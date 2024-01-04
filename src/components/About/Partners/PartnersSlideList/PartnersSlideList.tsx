import React from "react";

import {useQuery} from "react-query";

import { useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import { BASE_URL } from "../../../../api/fetcher";

import { loadData } from "../../../../api/loadData";

import { fetchLogosList } from "../../../../api/partnersLogo";

import "swiper/css";

import { PartnersCard } from "../PartnersCard/PartnersCard";

import { theme } from "../../../../theme/theme";

import { handleSlideToDisplay } from "../../../../helpers/handleSlideToDisplay";

import {IPartners, partners} from "../PartnersSlider/partnersList";


export const PartnersSlideList = () => {
  const imgPath = BASE_URL + "/api/logo/logos/";

  const {isLoading, isError, isSuccess,data} = useQuery({
      queryKey: ["logosList"],
      queryFn: async () => {
          try {
              const data = await loadData(fetchLogosList)();

              const dataNew:IPartners[] = data.map(logoData =>(
                  {
                      id: logoData.id.toString(),
                      src: imgPath + logoData.path,
                  }))
              return dataNew;
          }
          catch (e){
              throw e
          }
      },
      placeholderData: partners,
      },
  );

  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
  //const isBolowMd = useMediaQuery(theme.breakpoints.down("md"));

  const numToDisplay = handleSlideToDisplay(2, isAboveMd, isAboveLg);

  if (isLoading) return <></>;

  if (isError) {

    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={32}
        //centeredSlides={isBolowMd}
        slidesPerView={numToDisplay}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {partners.map((item) => (
          <SwiperSlide key={item.id}>
            <PartnersCard imageSrc={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  if(isSuccess)
  {
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
        slidesPerView={handleSlideToDisplay(data.length, isAboveMd, isAboveLg)}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {
          data.map((slideInfo: IPartners) => (
              <SwiperSlide key={slideInfo.id}>
                <PartnersCard imageSrc={slideInfo.src} />
              </SwiperSlide>
          ))
        }
      </Swiper>
    );
  }

  return  (<></>)
};
