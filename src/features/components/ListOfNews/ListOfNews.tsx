import { Grid, useMediaQuery } from "@mui/material";
import { theme } from "theme/theme";

import { New } from "features/components/New/New";

import { ListNews } from "components/About/OurNews/listNews";

interface Props {
  list: ListNews[];
}

export const ListOfNews = ({ list }: Props): JSX.Element => {
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
      {list.slice(0, numToDisplay).map(({ id, image, title, description, date }) => (
        <New
          image={image}
          title={title}
          description={description}
          button="Детальніше"
          date={date}
          key={id}
        />
      ))}
    </Grid>
  );
};
