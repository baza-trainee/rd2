import { Box, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

interface Props {
  icon: string;
  buttonText: string;
}

export const ButtonChangePassword = ({ icon, buttonText }: Props) => {
  return (
    <ListItem disablePadding sx={{ marginBottom: "34px" }}>
      <ListItemButton sx={{ paddingInline: "24px" }}>
        <Box>
          <img src={icon} alt={buttonText} />
        </Box>

        <ListItemText sx={{ paddingLeft: "12px" }}>
          <Typography color="#8eb6f8" variant="h6">
            {buttonText}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
