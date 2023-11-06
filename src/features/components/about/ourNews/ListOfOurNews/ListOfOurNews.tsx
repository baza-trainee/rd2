import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import { theme } from "theme/theme";
import { ListNews } from "components/About/OurNews/listNews";
import { getSlideCount } from "features/helpers/getSlideCount";

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
  const isAboveXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  const slidesCount = getSlideCount(isAboveMd, isAboveXl);

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
        slidesPerView={slidesCount}
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

        {!isAboveMd && <CustomPagination />}
      </Swiper>
    </Wrapper>
  );
};
