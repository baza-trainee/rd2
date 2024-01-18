import Typography from "@mui/material/Typography";

import { UserMessage } from "types/typeFeedbackUserDetails";
import { theme } from "theme/theme";
import {
  MessageBlock,
  MessageDateBlock,
} from "components/Admin/AdminFeedback/UserFeedbackDetails/UserFeedbackDetales.styled";

type FeedbackDetailsMessagesProps = {
  userMessages: UserMessage[];
};

const FeedbackDetailsMessages = ({ userMessages }: FeedbackDetailsMessagesProps) => {
  const userMessagesList = userMessages.map((mes: UserMessage, index: number) => (
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
  ));

  return <>{userMessagesList}</>;
};

export { FeedbackDetailsMessages };
