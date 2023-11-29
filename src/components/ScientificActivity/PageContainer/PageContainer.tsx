import { PropsWithChildren } from "react";

import { Container, SectionWrapper } from "./PageContainer.styled";

export const PageContainer = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Container>
      <SectionWrapper>{children}</SectionWrapper>
    </Container>
  );
};
