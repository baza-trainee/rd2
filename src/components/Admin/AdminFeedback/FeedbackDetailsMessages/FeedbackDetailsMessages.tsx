import React from "react";

import Typography from "@mui/material/Typography";

import {UserMessage} from "../../../../types/typeFeedbackUserDetails";

import {MessageBlock, MessageDateBlock} from "../UserFeedbackDetails/UserFeedbackDetales.styled";

import {theme} from "../../../../theme/theme";


type FeedbackDetailsMessagesProps = {
    userMessages: UserMessage[]
}

const FeedbackDetailsMessages = ({userMessages}: FeedbackDetailsMessagesProps) => {

    const userMessagesList = userMessages.map((mes: UserMessage, index:number) => (
        <MessageBlock key={index}>
            <MessageDateBlock>
                <span>дата звернення: </span>
                <span>{mes.date}</span>
            </MessageDateBlock>
            <Typography variant="h6" color={theme.palette.primary.dark}>
                Текст звернення
            </Typography>

            <Typography variant="h6">{mes.message}</Typography>
        </MessageBlock>
    ))

    return (
        <>
            { userMessagesList }
        </>
    )
}

export {FeedbackDetailsMessages}