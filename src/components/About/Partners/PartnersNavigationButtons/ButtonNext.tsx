import { Next } from "components/About/Partners/PartnersNavigationButtons/ButtonNext.styled";
import nextIcon from "assets/images/partners/Icon-2.png";

export const ButtonNext = () => {
  return (
    <Next className="next">
      <img src={nextIcon} alt="button for move to next slide" />
    </Next>
  );
};
