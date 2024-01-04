import { Button, ListItem } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { AccessTokenService } from "services/AccessTokenService";

interface Props {
  icon: string;
  buttonText: string;
}

export const ButtonLeave = ({ icon, buttonText }: Props) => {
  const { removeAccessToken } = new AccessTokenService();

  const navigate = useNavigate();
  const onClick = () => {
    removeAccessToken();

    navigate("/auth");
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
