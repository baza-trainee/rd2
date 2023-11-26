import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import imgUrl from "assets/images/contactPage/bgDron.jpg";

const OurContactsBlock = styled.div`
  width: 100%;
  height: 805px;

  padding: 40px;
  border-radius: 24px;
  background: center / cover no-repeat url(${imgUrl});

  @media (min-width: 1280px) {
    width: 41%;
  }
`;

const ContactsTitleStyled = styled(Typography)`
  margin-bottom: 40px;
`;
const BlockItem = styled.div`
  margin-bottom: 40px;
`;
const ItemTitle = styled.h5`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export { OurContactsBlock, ItemTitle, ContactsTitleStyled, BlockItem };
