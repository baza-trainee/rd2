import { Grid, useMediaQuery } from "@mui/material";
import { theme } from "theme/theme";
import { ListNews } from "components/About/OurNews/listNews";

import { NewOfOurNews } from "features/components/NewOfOurNews/NewOfOurNews";

import { MoreInfoOfNews } from "features/components/MoreInfoOfNews/MoreInfoOfNews";

interface Props {
  list: ListNews[];
}

export const ListOfOurNews = ({ list }: Props): JSX.Element => {
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  let numToDisplay = 1;

  if (isXl) {
    numToDisplay = 3;
  } else if (isMd) {
    numToDisplay = 2;
  } else if (isSm) {
    numToDisplay = 1;
  }

  return (
    <Grid container columnSpacing={3} flexGrow={1}>
      {list
        .slice(0, numToDisplay)
        .map(({ id, image, retinaImg, title, description, date }) => (
          <NewOfOurNews
            imageSrc={image}
            retinaImageSrc={retinaImg}
            title={title}
            description={description}
            key={id}
          >
            <MoreInfoOfNews buttonText="Детальніше" date={date} />
          </NewOfOurNews>
        ))}
    </Grid>
  );
};
