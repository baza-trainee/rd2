import Typography from "@mui/material/Typography";

import {TextLogo} from "./Logo.styled";

export const Logo = () => {
  return (

    <TextLogo>
      <Typography variant="h6"
        component="h6"
      >
        НАН України
      </Typography>
      <p>ДП НДЦ  <span>проблем надрокористування </span>«Георесурс»</p>
    </TextLogo>
  );
};
