import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import Typography from "@mui/material/Typography";

import {Grid} from "@mui/material";

import {PageContentWrapper} from "../../PageContentWrapper/PageContentWrapper";


type UserProps = {
    name: string,
    surname: string,
    phone: string,
    email: string,
    message: string
}
const UserData:UserProps = {
    name: "Name",
    surname: "Surname",
    phone: "some phone",
    email: "email@gmail.com",
    message: "some message",
}

async function LoadData (id:string){

    const promise: Promise<UserProps> = new Promise((resolve) => {
        setTimeout(() =>
                resolve( UserData),
            1000)
    });
    const  response = await promise;

    //if (response.ok) return response.json;
    if (response) return response;
    else throw Error("loading user error");

}
const UserFeedbackDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        id && LoadData(id)
          .then((response:UserProps) => setUser(response));
    }, [id]);

    return (
        <PageContentWrapper>

            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ім'я
                    </Typography>

                    <Typography variant="h6">
                        {user ? user.name : "load..."}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">
                        Фамілія
                    </Typography>

                    <Typography variant="h6">
                        {user ? user.surname : "load..."}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">
                        Телефон
                    </Typography>

                    <Typography variant="h6">
                        {user ? user.phone : "load..."}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">
                        Електронна адреса
                    </Typography>

                    <Typography variant="h6">
                        {user ? user.email : "load..."}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">
                        Текст звернення
                    </Typography>

                    <Typography variant="h6">
                        {user ? user.message : "load..."}
                    </Typography>
                </Grid>
            </Grid>

        </PageContentWrapper>
    )
}

export {UserFeedbackDetails}