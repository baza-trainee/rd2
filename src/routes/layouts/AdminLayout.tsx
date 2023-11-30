import {Navigate} from "react-router-dom";

export const AdminLayout = () => {

    const isLoggedIn = true;

    return isLoggedIn
        ? <Navigate to="/admin-panel" replace={true} />
        : <Navigate to="/auth" replace={true} />;

};
