import {createContext, useState} from "react";
import { App } from "App";
import { AuthHeader } from "components/Auth/AuthHeader/AuthHeader";

import {AuthRoutes} from "routes/AdminRoutes/AuthRoutes";
import {AdminPanelRoutes} from "routes/AdminRoutes/AdminPanelRoutes";

import {checkIsLoggedIn} from "../../api/adminAuth";

type ContextValueProps = {
    isLoggedIn: boolean,
    setIsLoggedIn: (newIsLoggedIn: boolean) => void
}

export const AuthContext = createContext<ContextValueProps>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

export const AdminRoutes = () => {

    const initialState = checkIsLoggedIn();
    const [isLoggedIn, setIsLoggedIn] = useState(initialState);

    return (
        <App>
            <AuthHeader />

            <AuthContext.Provider value={{
                isLoggedIn,
                setIsLoggedIn,
            }}>

            { isLoggedIn
                ? <AdminPanelRoutes />
                : <AuthRoutes />
            }
            </AuthContext.Provider>
        </App>
    );
};