import { Advantage } from "types/typeAdvantage";
import { AdvantagesCard } from "components/About/Advantages/AdvantagesCard/AdvantagesCard";
import { AdvantageList } from "components/About/Advantages/AdvantagesList/AdvantagesList.styled";

interface Props {
  list: Advantage[];
}

export const AdvantagesList = ({ list }: Props) => {
  return (
    <AdvantageList>
      {list.map(({ id, img, titleKey, descKey }) => (
        <AdvantagesCard
          key={id}
          imgSrc={img}
          titleKey={titleKey}
          descriptionKey={descKey}
        />
      ))}
    </AdvantageList>
  );
};
