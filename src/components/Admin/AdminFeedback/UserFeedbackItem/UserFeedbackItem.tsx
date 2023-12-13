import Typography from "@mui/material/Typography";

import { ItemWrap, LinkStyled } from "./UserFeedbackItem.styled";

type UserFeedbackItemProps = {
  name: string;
  surname: string;
  id: string;
};

const UserFeedbackItem = ({ name, surname, id }: UserFeedbackItemProps) => {

  return (
    <ItemWrap>
      <Typography variant="h6">
        <span>{name}</span>
        <span>{surname}</span>
      </Typography>

      <LinkStyled to={`${id}`}>
        Детальніше
      </LinkStyled>
    </ItemWrap>
  );
};

export { UserFeedbackItem };
