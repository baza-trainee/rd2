import { Box, Button, Typography, useTheme } from "@mui/material";

import { Divider } from "components/About/OurNews/MoreInfoOfNews/MoreInfoOfNews.styled";

interface Props {
  buttonText: string;
  date: string;
}

export const MoreInfoOfNews = ({ buttonText, date }: Props) => {
  const { palette } = useTheme();

  return (
    <Box paddingInline="24px" marginBottom="24px">
      <Button
        sx={{ fontWeight: 600 }}
        fullWidth
        variant="contained"
        LinkComponent="a"
        href="https://www.nas.gov.ua/UA/Pages/Default.aspx"
        target="_blank"
      >
        {buttonText}
      </Button>
      <Divider />
      <Typography color={palette.secondary.light}>{date}</Typography>
    </Box>
  );
};
