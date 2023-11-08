import styled from "@emotion/styled";

import {Dialog} from "@mui/material";

import {theme} from "../../theme/theme";

const bgrColor = theme.palette.secondary.main;

const DialogStyled = styled(Dialog)`
  & .MuiPaper-root {
    max-width: 520px;
     border-radius: 24px;
    
    & > button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  @media (min-width: 468px) {
    & > button {
      top: 20px;
      right: 20px;
    }
  }
  @media (min-width: 1280px) {
    & .MuiPaper-root {
      max-width: 768px;
    }
  }
`;
const ModalContent = styled.div`
  height: 550px;
  padding: 40px 15px;
  background-color: ${bgrColor};
  
  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 1280px) {
    height: 734px;
  }
`;

export {ModalContent, DialogStyled};