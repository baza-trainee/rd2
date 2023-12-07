import { IntroduceList } from "components/About/Introduce/IntroduceList/IntroduceList";
import { introduceList } from "components/About/Introduce/introduceList";

import { Container, SectionWrapper } from "components/About/Introduce/Introduse.styled";

export const Introduce = () => {
  return (
    <Container>
      <SectionWrapper>
        <IntroduceList list={introduceList} />
      </SectionWrapper>
    </Container>
  );
};
