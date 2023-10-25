import { PartnersSlider } from "features/components/about/partners/PartnersSlider/PartnersSlider";
import { SectionContainer } from "features/components/SectionContainer/SectionContainer";
import { SectionHeader } from "features/components/SectionHeader/SectionHeader";

import { partners } from "./partnersList";

export const Partners = () => {
  return (
    <SectionContainer>
      <SectionHeader title="Партнерські організації">
        Організації, з якими ми постійно співпрацюємо
      </SectionHeader>
      <PartnersSlider partnersList={partners} />
    </SectionContainer>
  );
};
