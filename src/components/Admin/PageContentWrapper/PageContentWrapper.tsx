import { PropsWithChildren } from "react";

import { Wrapper } from "components/Admin/PageContentWrapper/PageContentWrapper.styled";

export const PageContentWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
