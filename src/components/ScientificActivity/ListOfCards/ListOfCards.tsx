import { TypeScientificActivity } from "types/typeActivity";
import { Card } from "components/ScientificActivity/Card/Card";

import { CardWrapper } from "components/ScientificActivity/ListOfCards/ListOfCards.styled";

interface Props {
  list: TypeScientificActivity[];
}

export const ListOfCards = ({ list }: Props): JSX.Element => {
  return (
    <CardWrapper>
      {list.map(({ id, titleKey, textKey, img, retinaImg }) => {
        const isEven = id % 2 === 0;

        return (
          <Card
            key={id}
            isEven={isEven}
            imageSrc={img}
            retinaImageSrc={retinaImg}
            titleKey={titleKey}
            textKey={textKey}
          />
        );
      })}
    </CardWrapper>
  );
};
