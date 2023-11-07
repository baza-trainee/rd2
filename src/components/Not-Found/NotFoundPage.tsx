import React from "react";
import { Link } from "react-router-dom";

import drone from "../../assets/icons/404/404drone.svg";
import img404 from "../../assets/icons/404/404.svg";
import ellipse from "../../assets/icons/404/Ellipse.png";
import ellipse2 from "../../assets/icons/404/Ellipse2.png";

import {
  Container,
  SectionWrapper,
  Drone,
  Numb,
  Text,
  Text2,
  Button,
  Picture,
} from "./NotFoundPage.styled";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Container>
        <SectionWrapper>
          <Drone src={drone} alt="drone" />
          <Picture>
            <source srcSet={ellipse2} media="(min-width: 1440px)" />
            <source srcSet={ellipse2} media="(min-width: 768px)" />
            <img src={ellipse} alt="fone" />
          </Picture>
          <Numb src={img404} alt="404" />
          <Text>Шкода, але сторінку не знайдено.</Text>
          <Text2>Можливо, її перенесли або видалили.</Text2>
          <Button>
            <Link to="/" style={{ color: "#f5f5f5" }}>
              Повернутися на головну сторінку
            </Link>
          </Button>
        </SectionWrapper>
      </Container>
    </>
  );
};
