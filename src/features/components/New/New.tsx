import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "theme/theme";

import { Divider } from "./New.styled";

interface Props {
  image: string;
  title: string;
  description: string;
  button: string;
  date: string;
}

export const New = ({ image, title, description, button, date }: Props) => {
  return (
    <Grid item sm={12} md={6} xl={4}>
      <Grid
        container
        bgcolor={theme.palette.primary.light}
        borderRadius="24px"
        height="100%"
      >
        <Grid item>
          <Box height="100%" display="flex" flexDirection="column">
            <Box flexGrow={0}>
              <img src={image} style={{ width: "100%" }} alt={image} />
            </Box>
            <Box flexGrow={1} paddingInline="24px" marginTop="12px">
              <Typography variant="h4" component="h4">
                {title}
              </Typography>
              <Typography paragraph marginTop="16px">
                {description}
              </Typography>
            </Box>

            <Box flexGrow={0} paddingInline="24px" marginBottom="24px">
              <Button fullWidth variant="contained">
                {button}
              </Button>
              <Divider />
              <Typography color={theme.palette.secondary.light}>{date}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
