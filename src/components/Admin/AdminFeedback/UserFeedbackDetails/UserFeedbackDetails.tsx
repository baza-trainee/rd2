import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import {FeedbackUserDetails, UserMessage} from "types/typeFeedbackUserDetails";

import { theme } from "theme/theme";

import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";

import { fieldNamesList } from "components/Admin/AdminFeedback/UserFeedbackDetails/FieldNamesList";

import {useQuery} from "react-query";

import {loadData} from "../../../../api/loadData";

import {fetchUserFeedback} from "../../../../api/feedBackUsers";

import {mapFeedbackMessages} from "../../../../helpers/admin/mapFeedbackMessages";
import {FeedbackDetailsMessages} from "../FeedbackDetailsMessages/FeedbackDetailsMessages";
import {ErrorBlock} from "../../../commonComponents/ErrorBlock/ErrorBlock";

const UserFeedbackDetails = () => {

  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["user", id],
    queryFn: loadData(fetchUserFeedback(id)),
    enabled: !!id,
  });

  const [userMessages, setUserMessages] = useState<UserMessage[]|null>(null);

  useEffect(() => {
    data && setUserMessages(mapFeedbackMessages(data.messages));
  }, [data]);

  return (
    <PageContentWrapper>
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
        ))
        }

        <Grid item xs={12}>

          {userMessages && <FeedbackDetailsMessages userMessages={userMessages}/>}

          {error instanceof Error
              && <ErrorBlock blockType={true}>
                <p>{error.message}</p>
              </ErrorBlock>
          }

        </Grid>
      </Grid>
    </PageContentWrapper>
  );
};

export { UserFeedbackDetails };
