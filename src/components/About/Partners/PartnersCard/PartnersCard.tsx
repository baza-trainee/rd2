import { Card } from "components/About/Partners/PartnersCard/PartnersCard.styled";

interface Props {
  imageSrc: string;
  retinaImageSrc: string;
}

export const PartnersCard = ({ imageSrc, retinaImageSrc }: Props) => {
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
