import React, {ReactNode} from "react";

import {StyledText} from "./ErrorBlock.styled";

type ErrorBlockProps = {
    blockType?: boolean;
    children: ReactNode;
}
export const ErrorBlock = ({children, blockType=false}: ErrorBlockProps) => {

  return (
    <StyledText blockType={blockType}>
      {children}
    </StyledText>
  );
};