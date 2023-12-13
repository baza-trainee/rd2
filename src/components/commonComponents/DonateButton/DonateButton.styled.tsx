import styled from "@emotion/styled";

import Button from "@mui/material/Button";

const ButtonStyled = styled(Button)`
  margin-left: 10px;
  margin-right: 15px;
  padding-left: 15px;
  padding-right: 15px;
  text-transform: none;
  
  @media (min-width: 468px) {

    margin-left: 20px;
    margin-right: 20px;
    min-width: 185px;

  }

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export {ButtonStyled};