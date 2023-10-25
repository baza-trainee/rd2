import { FC } from "react";

import { Card } from "./PartnersCard.styled";

interface Props {
  imageSrc: string;
  retinaImageSrc: string;
}

export const PartnersCard: FC<Props> = ({ imageSrc, retinaImageSrc }) => {
  return (
    <Card>
      <img
        src={imageSrc}
        srcSet={`${imageSrc} x1, ${retinaImageSrc} x2`}
        alt={imageSrc}
      />
    </Card>
  );
};
