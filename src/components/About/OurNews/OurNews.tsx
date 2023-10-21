import { ListOfNews } from "features/components/ListOfNews/ListOfNews";
import { list } from "components/About/OurNews/listNews";
import { SectionContainer } from "features/components/SectionContainer/SectionContainer";
import { SectionHeader } from "features/components/SectionHeader/SectionHeader";

export const OurNews = () => {
  return (
    <SectionContainer>
      <SectionHeader title="Наші новини">
        Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей
        та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та
        допомогти з будь-якими питаннями, пов'язаними з дронами.
      </SectionHeader>
      <ListOfNews list={list} />
    </SectionContainer>
  );
};
