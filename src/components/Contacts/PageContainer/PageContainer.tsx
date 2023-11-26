import { PropsWithChildren } from "react";

import { Container } from "@mui/material";

import {
  PageWrapper,
  ContentWrapper,
} from "components/Contacts/PageContainer/PageContainer.styled";

export const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </PageWrapper>
  );
};
