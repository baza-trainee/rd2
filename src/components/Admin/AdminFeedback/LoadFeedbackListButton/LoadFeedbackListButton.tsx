import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";

export const LoadFeedbackListButton = () => {
  const onClick = () => {};

  return (
    <Box display="flex" justifyContent="end" mb={3}>
      <Button
        variant="contained"
        size="small"
        endIcon={<DownloadIcon />}
        href="#"
        download
        onClick={onClick}
      >
        Завантажити excel файл з переліком звернень
      </Button>
    </Box>
  );
};