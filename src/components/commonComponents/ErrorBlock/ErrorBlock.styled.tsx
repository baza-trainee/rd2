import styled from "@emotion/styled";

import {theme} from "../../../theme/theme";

const errorTextColor = theme.palette.error.dark;

type StyledTextProps = {
    blockType: boolean;
}
const StyledText = styled.p<StyledTextProps>`
  //position: absolute;
  padding: ${props => (props.blockType && '30px 10px')};
  text-align: ${props => (props.blockType ? 'center' : 'left')};
  font-size: 14px;
  color: ${errorTextColor};

  position: ${props => (props.blockType ? 'static' : 'absolute')};
`;

export {StyledText}