import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

import { theme } from "theme/theme";
import { getSlideCount } from "helpers/getSlideCount";
import { ListNews } from "components/About/OurNews/OurNews/listNews";
import { NewOfOurNews } from "components/About/OurNews/CardOfNews/CardOfNews";
import { MoreInfoOfNews } from "components/About/OurNews/MoreInfoOfNews/MoreInfoOfNews";
import { CustomPagination } from "components/About/OurNews/CustomPagination/CustomPagination";
import { Wrapper } from "components/About/OurNews/ListOfOurNews/ListOfOurNews.styled";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  list: ListNews[];
}

export const ListOfOurNews = ({ list }: Props) => {
  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  const slidesCount = getSlideCount(isAboveMd, isAboveLg);

  const { t } = useTranslation();

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
              <MoreInfoOfNews date={date} buttonText={`${t("buttons.more_info")}`} />
            </NewOfOurNews>
          </SwiperSlide>
        ))}

        {!isAboveMd && <CustomPagination />}
      </Swiper>
    </Wrapper>
  );
};
