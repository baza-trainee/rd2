import React, {ReactNode} from "react";

import {StyledText} from "./ErrorBlock.styled";

type ErrorBlockProps = {
    blockType?: boolean;
    className?: string;
    children: ReactNode;
}
export const ErrorBlock = ({children, blockType=false, className}: ErrorBlockProps) => {

  return (
    <StyledText blockType={blockType} className={className}>
      {children}
    </StyledText>
  );
};