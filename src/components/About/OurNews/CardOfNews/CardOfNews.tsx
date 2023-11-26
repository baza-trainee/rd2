import { ReactNode } from "react";

import { Typography } from "@mui/material";

import { Card, Content } from "components/About/OurNews/CardOfNews/CardOfNews.styled";

interface Props {
  imageSrc: string;
  retinaImageSrc: string;
  title: string;
  description: string;
  children: ReactNode;
}

export const NewOfOurNews = ({
  children,
  imageSrc,
  retinaImageSrc,
  title,
  description,
}: Props) => {
  return (
    <Card>
      <div>
        <img src={imageSrc} srcSet={`${imageSrc} x1, ${retinaImageSrc} x2`} alt={title} />
      </div>
      <Content>
        <Typography variant="h4">{title}</Typography>
        <Typography marginBlock="16px">{description}</Typography>
      </Content>
      {children}
    </Card>
  );
};
