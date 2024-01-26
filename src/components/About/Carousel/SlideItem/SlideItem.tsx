import { Container } from "@mui/material";

import { SlideInfo } from "components/About/Carousel/SlideInfo/SlideInfo";
import { SlideContainer } from "components/About/Carousel/SlideItem/SlideItem.styled";

type SlideItemProps = {
  title: string;
  desc: string;
  imgSrc: string;
  imgMobileSrc: string;
  retinaImgSrc: string;
  retinaImgMobileSrc: string;
};

export  const SlideItem = (props: SlideItemProps) => {

  const { title, desc, imgSrc, retinaImgSrc, imgMobileSrc, retinaImgMobileSrc } = props;

  return (
      <SlideContainer
          imgSrc={imgSrc} imgMobileSrc={imgMobileSrc}
          retinaImgSrc={retinaImgSrc} retinaImgMobileSrc={retinaImgMobileSrc}
      >
        <Container maxWidth="xl">
          <SlideInfo title={title} description={desc} />
        </Container>
      </SlideContainer>
  )
};


