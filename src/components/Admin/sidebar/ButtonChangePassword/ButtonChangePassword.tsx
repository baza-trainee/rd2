import { Box, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES_ENUM } from "types/enums/routes.enum";

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
          <Link to={ROUTES_ENUM.CHANGE_PASSWORD}>
            <Typography color="#8eb6f8" variant="h6">
              {buttonText}
            </Typography>
          </Link>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
