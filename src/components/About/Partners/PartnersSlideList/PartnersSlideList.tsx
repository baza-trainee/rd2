import React from "react";

import {useQuery} from "react-query";

import {Typography, useMediaQuery} from "@mui/material";

import {Swiper, SwiperSlide} from "swiper/react";

import { Navigation } from "swiper/modules";

import {BASE_URL} from "../../../../api/fetcher";

import {loadData} from "../../../../api/loadData";

import {fetchLogosList, ResponseLogosList} from "../../../../api/partnersLogo";

import "swiper/css";

import {PartnersCard} from "../PartnersCard/PartnersCard";

import {theme} from "../../../../theme/theme";

import {handleSlideToDisplay} from "../../../../helpers/handleSlideToDisplay";

import {partners} from "../PartnersSlider/partnersList";

export const PartnersSlideList = () => {

    const imgPath = BASE_URL + "/api/logo/logos/";

    const {isLoading, isError, data} = useQuery({
        queryKey: ["logosList"],
        queryFn: loadData(fetchLogosList),
        placeholderData: partners,
    });

    const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
    const isBolowMd = useMediaQuery(theme.breakpoints.down("md"));

    const numToDisplay = handleSlideToDisplay(2, isAboveMd, isAboveLg);

    if (isLoading ) return (<></>);

    if (isError) {
        return (
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                //centeredSlides={isBolowMd}
                slidesPerView={numToDisplay}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
            >
                {
                    partners.map((item) => (
                        <SwiperSlide key={item.id}>
                            <PartnersCard imageSrc={item.src} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }

    return  (
        <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            centeredSlides={isBolowMd}
            slidesPerView={handleSlideToDisplay(data.length, isAboveMd, isAboveLg)}
            navigation={{
                prevEl: ".prev",
                nextEl: ".next",
            }}
        >
            {
                ( data.length < 1 )
                    ? <Typography>Тут будуть логотипи наших партнерів</Typography>
                    : (
                        data.map((slideInfo: ResponseLogosList) => {
                          const imgSrc = slideInfo.path?(imgPath+slideInfo.path):slideInfo.src|| "";
                          return (<SwiperSlide key={slideInfo.id}>
                                    <PartnersCard imageSrc={imgSrc} />
                                </SwiperSlide>)
                        })
                    )
            }
        </Swiper>
    )
}