import { Card } from "components/About/Partners/PartnersCard/PartnersCard.styled";

interface Props {
  imageSrc: string;
}

export const PartnersCard = ({ imageSrc }: Props) => {
  return (
    <Card>
      <img src={imageSrc} alt={imageSrc} />
    </Card>
  );
};
