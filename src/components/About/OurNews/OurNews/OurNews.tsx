import { useTranslation } from "react-i18next";

import { ListOfOurNews } from "components/About/OurNews/ListOfOurNews/ListOfOurNews";
import { list } from "components/About/OurNews/OurNews/listNews";
import { SectionContainer } from "components/commonComponents/SectionContainer/SectionContainer";
import { SectionHeader } from "components/commonComponents/SectionHeader/SectionHeader";

export const OurNews = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionHeader title={t("our_news_block.title")}>
        {t("our_news_block.about")}
      </SectionHeader>
      <ListOfOurNews list={list} />
    </SectionContainer>
  );
};
