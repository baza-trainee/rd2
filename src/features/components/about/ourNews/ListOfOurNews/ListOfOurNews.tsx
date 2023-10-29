import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import { theme } from "theme/theme";
import { ListNews } from "components/About/OurNews/listNews";
import { handleSlideVisibility } from "features/helpers/handleSlideVisibility";
import { handleShowPagination } from "features/helpers/handleShowPagination";

import { NewOfOurNews } from "../NewOfOurNews/NewOfOurNews";
import { MoreInfoOfNews } from "../MoreInfoOfNews/MoreInfoOfNews";
import { CustomPagination } from "../CustomPagination/CustomPagination";

import { Wrapper } from "./ListOfOurNews.styled";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  list: ListNews[];
}

export const ListOfOurNews: FC<Props> = ({ list }) => {
  const [numToDisplay, setNumToDisplay] = useState<number>(1);
  const [isVisible, setIsvisible] = useState<boolean>(true);

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    setNumToDisplay(handleSlideVisibility(isSm, isMd, isXl));
    setIsvisible(handleShowPagination(isMd, isXl));
  }, [isSm, isMd, isXl]);

  return (
    <Wrapper>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".pagination",
          type: "bullets",
        }}
        spaceBetween={24}
        slidesPerView={numToDisplay}
      >
        {list.map(({ id, description, date, image, retinaImg, title }) => (
          <SwiperSlide key={id}>
            <NewOfOurNews
              imageSrc={image}
              retinaImageSrc={retinaImg}
              title={title}
              description={description}
            >
              <MoreInfoOfNews date={date} buttonText="Детальніше" />
            </NewOfOurNews>
          </SwiperSlide>
        ))}
        {isVisible && <CustomPagination />}
      </Swiper>
    </Wrapper>
  );
};
