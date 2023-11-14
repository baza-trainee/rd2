import {
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  icon: string;
  buttonText: string;
}

export const MenuButton = ({ icon, buttonText }: Props) => {
  return (
    <ListItemAvatar>
      <ListItemButton sx={{ paddingInline: "24px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={icon} alt={buttonText} />
        </Box>

        <ListItemText sx={{ paddingLeft: "12px" }}>
          <Typography variant="h6">{buttonText}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItemAvatar>
  );
};
