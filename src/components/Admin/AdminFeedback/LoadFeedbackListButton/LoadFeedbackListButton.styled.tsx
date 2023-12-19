import styled from "@emotion/styled";

import DownloadIcon from "@mui/icons-material/Download";

import {keyframes} from "@emotion/react";

import {theme} from "../../../../theme/theme";

const buttonColor = theme.palette.primary.main;


const flashing = keyframes`
from {
  color: inherit;
}
to {
  color: ${buttonColor};
}
`;
const DownloadIconStyled = styled(DownloadIcon)`
  &.flashing {
    animation: 1s linear 0s infinite ${flashing};
  }
`;

export {DownloadIconStyled}