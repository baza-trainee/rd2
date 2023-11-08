import Typography from "@mui/material/Typography";

import {DonateButton} from "../../commonComponents/DonateButton/DonateButton";

import {SlideContent} from "./Carousel.styled";

interface SlideInfoProps {
    title: string;
    description: string
}
export const SlideInfo = ({ title, description }: SlideInfoProps) => {
  return (
    <SlideContent>

      <Typography variant="h2"
        component="h1"
        color="secondary"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography variant="body1"
        color="secondary"
      >
        {description}
      </Typography>

      <DonateButton></DonateButton>

    </SlideContent>
  );
};