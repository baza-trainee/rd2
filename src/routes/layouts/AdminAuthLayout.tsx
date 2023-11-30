import { Outlet } from "react-router-dom";

import { AuthContainer } from "components/Auth/AuthContainer/AuthContainer";
import { PaperContainer } from "components/Auth/PaperContainer/PaperContainer";
import {AuthHeader} from "../../components/Auth/AuthHeader/AuthHeader";
import {App} from "../../App";

export const AdminAuthLayout = () => {
  return (
<App>
    <AuthHeader />

    <AuthContainer>
        <PaperContainer>
            <Outlet />
        </PaperContainer>
    </AuthContainer>

</App>

  );
};
