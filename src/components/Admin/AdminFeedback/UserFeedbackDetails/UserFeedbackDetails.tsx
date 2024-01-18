/* eslint-disable max-len */
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useQuery } from "react-query";

import { FeedbackUserDetails, UserMessage } from "types/typeFeedbackUserDetails";
import { theme } from "theme/theme";
import { fieldNamesList } from "components/Admin/AdminFeedback/UserFeedbackDetails/FieldNamesList";
import { loadData } from "api/requests/loadData";
import { fetchUserFeedback } from "api/requests/feedBackUsers";
import { mapFeedbackMessages } from "helpers/admin/mapFeedbackMessages";
import { ErrorBlock } from "components/commonComponents/ErrorBlock/ErrorBlock";
import { FeedbackDetailsMessages } from "components/Admin/AdminFeedback/FeedbackDetailsMessages/FeedbackDetailsMessages";
import { PageContentWrapperStyled } from "components/Admin/AdminFeedback/UserFeedbackDetails/UserFeedbackDetales.styled";

const UserFeedbackDetails = () => {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["user", id],
    queryFn: loadData(fetchUserFeedback(id)),
    enabled: !!id,
  });

  const [userMessages, setUserMessages] = useState<UserMessage[] | null>(null);

  useEffect(() => {
    data && setUserMessages(mapFeedbackMessages(data.messages));
  }, [data]);

  return (
    <PageContentWrapperStyled>
      <Grid container spacing={2}>
        {fieldNamesList.map((fieldItem) => (
          <Grid item xs={6} key={fieldItem.key}>
            <Typography variant="h6" color={theme.palette.primary.dark}>
              {fieldItem.field}
            </Typography>

            <Typography variant="h6">
              {isLoading && "load..."}

              {data && data[fieldItem.key as keyof Omit<FeedbackUserDetails, "messages">]}

              {error instanceof Error && null}
            </Typography>
          </Grid>
        ))}

        <Grid item xs={12}>
          {userMessages && <FeedbackDetailsMessages userMessages={userMessages} />}

          {error instanceof Error && (
            <ErrorBlock blockType={true}>
              <p>{error.message}</p>
            </ErrorBlock>
          )}
        </Grid>
      </Grid>
    </PageContentWrapperStyled>
  );
};

export { UserFeedbackDetails };
