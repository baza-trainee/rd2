import { ReactNode } from "react";

import { Container, SectionWrapper } from "./SectionContainer.styled";

interface Props {
  children: ReactNode;
}

export const SectionContainer = ({ children }: Props): JSX.Element => {
  return (
    <Container>
      <SectionWrapper>{children}</SectionWrapper>
    </Container>
  );
};
