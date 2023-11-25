import { SxProps } from "@mui/material";

const BoxStyles: SxProps = {
  "& .error-message": {
    color: "red",
    fontSize: "12px",
  },
};

const InputStyles: SxProps = {
  height: "50px",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: "0px 16px",
  },
};

export { BoxStyles, InputStyles };
