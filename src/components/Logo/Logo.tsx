import Typography from "@mui/material/Typography";

import {TextLogo} from "./Logo.styled";

export const Logo = () => {
  return (

    <TextLogo>
      <Typography variant="h6"
        component="h6"
      >
        <span>НАН України</span>
        <span>НАНУ</span>
      </Typography>
      <p>ДП НДЦ  <span>проблем надрокористування </span>«Георесурс»</p>
    </TextLogo>
  );
};
