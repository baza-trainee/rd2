import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import {ItemWrap} from "./UserFeedbackItem.styled";

type UserFeedbackItemProps = {
    name: string,
    surname: string,
    date: string,
}

const UserFeedbackItem = ({name, surname, date}: UserFeedbackItemProps) => {
    return(
        <ItemWrap>
            <Typography variant="h6">
                <span>{name}</span>
                <span>{surname}</span>
            </Typography>

            <div>
                <span>дата звернення: </span>
                <span>{date}</span>
            </div>

            <Button size="small" variant="contained">
                Детальніше
            </Button>
        </ItemWrap>
    )
}

export {UserFeedbackItem}