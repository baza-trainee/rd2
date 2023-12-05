import { SxProps } from "@mui/material";

import {theme} from "../../../theme/theme";

const errorTextColor = theme.palette.error.dark;

const BoxStyles: SxProps = {
  "& .error-message": {
    color: errorTextColor,
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
