import { ListOfOurNews } from "features/about/ourNews/ListOfOurNews/ListOfOurNews";
import { list } from "components/About/OurNews/listNews";
import { SectionContainer } from "features/SectionContainer/SectionContainer";
import { SectionHeader } from "features/SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";

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
