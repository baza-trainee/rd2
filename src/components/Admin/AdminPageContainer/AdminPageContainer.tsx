import { PropsWithChildren } from "react";

import { Wrapper } from "./AdminPageContainer.styled";

const AdminPageContainer = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export { AdminPageContainer };
