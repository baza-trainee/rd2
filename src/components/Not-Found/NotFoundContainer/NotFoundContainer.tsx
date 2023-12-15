import { PropsWithChildren } from "react";

import {
  Container,
  SectionWrapper,
} from "components/Not-Found/NotFoundContainer/NotFoundContainer.styled";

export const NotFoundContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <SectionWrapper>{children}</SectionWrapper>
    </Container>
  );
};
