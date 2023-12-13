import { useContext } from "react";

import { Button, ListItem } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { AccessTokenService } from "services/AccessTokenService";
import { AuthContext } from "routes/layouts/Authorization";
import { LogOut } from "api/adminAuth";

interface Props {
  icon: string;
  buttonText: string;
}

export const ButtonLeave = ({ icon, buttonText }: Props) => {
  const { removeAccessToken } = new AccessTokenService();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const onClick = () => {
    LogOut();
    removeAccessToken();

    setIsLoggedIn(false);
    navigate("/admin");
  };
  return (
    <ListItem sx={{ paddingLeft: "24px" }}>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          gap: "16px",
          paddingInline: "12px",
          paddingBlock: "10px",
          bgcolor: "#fff",
          color: "#356cc6",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.8)",
          },
        }}
        onClick={onClick}
      >
        <img src={icon} alt={buttonText} />
        {buttonText}
      </Button>
    </ListItem>
  );
};
