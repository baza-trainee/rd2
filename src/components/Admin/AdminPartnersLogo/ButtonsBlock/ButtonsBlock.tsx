import { Box, Button } from "@mui/material";

type ButtonsBlockProps = {
  className?: string;
  onReset: () => void;
};

const ButtonsBlock = ({ onReset, className }: ButtonsBlockProps) => {
  return (
    <Box display="flex" justifyContent="center" m={"auto"} gap={3} className={className}>
      <Button variant="contained" type="submit">
        Додати
      </Button>
      <Button variant="contained" color="secondary" onClick={onReset}>
        Скасувати
      </Button>
    </Box>
  );
};

export { ButtonsBlock };
