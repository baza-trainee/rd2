import { Container } from "@mui/material";

import { SlideInfo } from "components/About/Carousel/SlideInfo/SlideInfo";
import { SlideContainer } from "components/About/Carousel/SlideItem/SlideItem.styled";

type Props = {
  title: string;
  desc: string;
  imgSrc: string;
  retinaImgSrc: string;
};

export const SlideItem = ({ title, desc, imgSrc, retinaImgSrc }: Props) => (
  <SlideContainer imgSrc={imgSrc} retinaImgSrc={retinaImgSrc}>
    <Container maxWidth="xl">
      <SlideInfo title={title} description={desc} />
    </Container>
  </SlideContainer>
);
