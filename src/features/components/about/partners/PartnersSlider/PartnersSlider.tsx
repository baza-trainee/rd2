import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import prevIcon from "assets/images/partners/Icon.png";
import nextIcon from "assets/images/partners/Icon-2.png";

import { IPartners } from "components/About/Partners/partnersList";
import { useSlideQuantity } from "features/hooks/useSlideQuantity";
import { useResize } from "features/hooks/useResize";

import { SwiperButtonNav } from "../PartnersButtonNav/PartnersButtonNav";
import { PartnersCard } from "../PartnersCard/PartnersCard";

import { SwiperContainer } from "./PartnersSlider.styled";
import "swiper/css";

interface Props {
  partnersList: IPartners[];
}

export const PartnersSlider: FC<Props> = ({ partnersList }) => {
  const { quantity } = useSlideQuantity({ type: "partners" });
  const { size } = useResize();

  const showButton = size !== "sm";
  const prevButton = showButton && <SwiperButtonNav imageSrc={prevIcon} prev />;
  const nextButton = showButton && <SwiperButtonNav imageSrc={nextIcon} next />;

  return (
    <SwiperContainer>
      {prevButton}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={quantity}
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
