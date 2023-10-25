import { ReactNode } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

interface Props {
  imageSrc: string;
  retinaImageSrc: string;
  title: string;
  description: string;
  children: ReactNode;
}

export const NewOfOurNews = ({
  children,
  imageSrc,
  retinaImageSrc,
  title,
  description,
}: Props) => {
  const { palette } = useTheme();

  return (
    <Grid item sm={12} md={6} xl={4}>
      <Grid container bgcolor={palette.primary.light} borderRadius="24px" height="100%">
        <Grid item>
          <Box height="100%" display="flex" flexDirection="column">
            <Box flexGrow={0}>
              <img
                width="100%"
                src={imageSrc}
                srcSet={`${imageSrc} x1, ${retinaImageSrc} x2`}
                alt={title}
              />
            </Box>
            <Box flexGrow={1} paddingInline="24px" marginTop="12px">
              <Typography variant="h4" component="h4">
                {title}
              </Typography>
              <Typography paragraph marginTop="16px">
                {description}
              </Typography>
            </Box>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};