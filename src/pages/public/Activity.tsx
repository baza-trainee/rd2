import { HeaderBlock } from "components/ScientificActivity/HeaderBlock/HeaderBlock";
import { ListOfCards } from "components/ScientificActivity/ListOfCards/ListOfCards";
import { PageContainer } from "components/ScientificActivity/PageContainer/PageContainer";
import { scientificActivityList } from "components/ScientificActivity/ScientificActivityList";

export const Activity = () => {
  return (
    <PageContainer>
      <HeaderBlock />

      <ListOfCards list={scientificActivityList} />
    </PageContainer>
  );
};

export default Activity;
