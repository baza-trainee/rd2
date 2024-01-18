import styled from "@emotion/styled";

import { theme } from "theme/theme";

const errorTextColor = theme.palette.error.dark;

type StyledTextProps = {
  blockType: boolean;
};
export const StyledText = styled.div<StyledTextProps>`
  padding: ${(props) => props.blockType && "30px 0"};
  text-align: left;
  font-size: ${(props) => (props.blockType ? "1.25rem" : "1rem")};
  color: ${errorTextColor};

  position: ${(props) => (props.blockType ? "static" : "absolute")};
`;
