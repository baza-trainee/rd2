import Typography from "@mui/material/Typography";

import { DonateButton } from "components/commonComponents/DonateButton/DonateButton";
import { SlideContent } from "components/About/Carousel/SlideInfo/SlideInfo.styled";

interface Props {
  title: string;
  description: string;
}

export const SlideInfo = ({ title, description }: Props) => {
  return (
    <SlideContent>
      <Typography variant="h2" component="h2" color="secondary" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" color="secondary">
        {description}
      </Typography>

      <DonateButton />
    </SlideContent>
  );
};
