import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";

import { theme } from "../../../../theme/theme";

import {
  FeedbackUserDetails,
  UserMessage,
} from "../../../../types/typeFeedbackUserDetails";

import { LoadData } from "../../../../api/feedbackData";

import { PageContentWrapper } from "../../PageContentWrapper/PageContentWrapper";

import { fieldNamesList } from "./FieldNamesList";

import { MessageBlock, MessageDateBlock } from "./UserFeedbackDetales.styled";

//type UserProps = {
//name: string,
//surname: string,
//phone: string,
//email: string,
//message: []
//}

const UserFeedbackDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState<FeedbackUserDetails | null>(null);

  useEffect(() => {
    id && LoadData(id).then((response: FeedbackUserDetails) => setUser(response));
  }, [id]);

  return (
    <PageContentWrapper>
      <Grid container spacing={2}>
        {fieldNamesList.map((fieldItem) => (
          <Grid item xs={6} key={fieldItem.key}>
            <Typography variant="h6" color={theme.palette.primary.dark}>
              {fieldItem.field}
            </Typography>

            <Typography variant="h6">
              {user
                ? user[fieldItem.key as keyof Omit<FeedbackUserDetails, "messages">]
                : "load..."}
            </Typography>
          </Grid>
        ))}

        <Grid item xs={12}>
          {user ? (
            user.messages.map((mes: UserMessage, index) => (
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
          ) : (
            <p>"load..."</p>
          )}
        </Grid>
      </Grid>
    </PageContentWrapper>
  );
};

export { UserFeedbackDetails };
