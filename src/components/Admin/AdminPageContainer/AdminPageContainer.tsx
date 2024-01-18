import { PropsWithChildren } from "react";

import { Wrapper } from "components/Admin/AdminPageContainer/AdminPageContainer.styled";

const AdminPageContainer = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export { AdminPageContainer };
