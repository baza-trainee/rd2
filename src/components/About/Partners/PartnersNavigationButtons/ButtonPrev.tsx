import { Prev } from "components/About/Partners/PartnersNavigationButtons/ButtonPrev.styled";
import prevIcon from "assets/images/partners/Icon.png";

export const ButtonPrev = () => {
  return (
    <Prev className="prev">
      <img src={prevIcon} alt="button for move to prev slide" />
    </Prev>
  );
};
