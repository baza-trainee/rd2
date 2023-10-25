import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import {SlideContent} from "./Carousel.styled";

interface SlideInfoProps {
    title: string;
    description: string
}
export const SlideInfo = ({ title, description }: SlideInfoProps) => {
  return (
    <SlideContent>

      <Typography variant="h2"
        component="h2"
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

      <Button variant="contained">підтримати</Button>

    </SlideContent>
  );
};