import {FormValues} from "../types/formValues";

export const checkIsLoggedIn = () => {
    const value = localStorage.getItem("admin_rd2");
    return  Boolean(value ? JSON.parse(value) : null);
}

export const LogOut = () => {
    localStorage.removeItem("admin_rd2");
}

export const FetchAuthCredentials = async (admin: FormValues) => {
    //request to API with login and password

    const promise: Promise<Boolean> = new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    });

    const response = await promise;
    // if (response.ok) save true to the localStorage
    if ( response ) {
        localStorage.setItem("admin_rd2", JSON.stringify(admin));
        return response;
    }

    else throw Error("login error");
}