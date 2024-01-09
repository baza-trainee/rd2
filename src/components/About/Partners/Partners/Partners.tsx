import { useTranslation } from "react-i18next";

import { PartnersSlider } from "components/About/Partners/PartnersSlider/PartnersSlider";
import { SectionContainer } from "components/commonComponents/SectionContainer/SectionContainer";
import { SectionHeader } from "components/commonComponents/SectionHeader/SectionHeader";

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionHeader title={t("partners_block.title")}>
        {t("partners_block.about")}
      </SectionHeader>

      <PartnersSlider />
    </SectionContainer>
  );
};
