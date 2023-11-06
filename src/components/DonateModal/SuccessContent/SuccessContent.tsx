import Typography from "@mui/material/Typography";

import {Wrapper} from "./SuccessContent.styled";

const SuccessContent = () => {

  return (
    <Wrapper>
      <Typography variant="h2" align="center">
                ДЯКУЄМО
      </Typography>
      <Typography variant="h3" align="center">
                за вашу підтримку!
      </Typography>
    </Wrapper>
  );
};

export {SuccessContent};