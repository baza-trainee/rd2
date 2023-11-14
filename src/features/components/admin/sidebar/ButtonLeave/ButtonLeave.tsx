import { Button, ListItem } from "@mui/material";

interface Props {
  icon: string;
  buttonText: string;
}

export const ButtonLeave = ({ icon, buttonText }: Props) => {
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
      >
        <img src={icon} alt={buttonText} />
        {buttonText}
      </Button>
    </ListItem>
  );
};
