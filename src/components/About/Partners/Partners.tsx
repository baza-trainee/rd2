import { PartnersSlider } from "features/about/partners/PartnersSlider/PartnersSlider";
import { SectionContainer } from "features/SectionContainer/SectionContainer";
import { SectionHeader } from "features/SectionHeader/SectionHeader";

import { useTranslation } from "react-i18next";

import { partners } from "./partnersList";

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionHeader title={t("partners_block.title")}>
        {t("partners_block.about")}
      </SectionHeader>

      <PartnersSlider partnersList={partners} />
    </SectionContainer>
  );
};
