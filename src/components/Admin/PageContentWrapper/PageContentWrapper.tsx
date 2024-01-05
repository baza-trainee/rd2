import React from "react";

import { Wrapper } from "components/Admin/PageContentWrapper/PageContentWrapper.styled";

type PageContentWrapperProps = {
  children: React.ReactNode,
  className?: string,
}

export const PageContentWrapper = ({ children, className }: PageContentWrapperProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
