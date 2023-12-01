import { Outlet } from "react-router-dom";

import { AuthContainer } from "components/Auth/AuthContainer/AuthContainer";
import { PaperContainer } from "components/Auth/PaperContainer/PaperContainer";

export const AuthLayout = () => {
    return (
        <AuthContainer>
            <PaperContainer>
                <Outlet />
            </PaperContainer>
        </AuthContainer>
    );
};