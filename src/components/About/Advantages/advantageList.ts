import { Advantage } from "types/typeAdvantage";
import firstAdvImg from "assets/images/advantages/unique-technologies.jpg";
import secondAdvImg from "assets/images/advantages/demining-teams.jpg";
import thirdAdvImg from "assets/images/advantages/explosive-objects.jpg";

export const advantageList: Advantage[] = [
  {
    id: 123,
    titleKey: "advantages_block.items.0.title",
    descKey: "advantages_block.items.0.desc",
    img: firstAdvImg,
  },
  {
    id: 124,
    titleKey: "advantages_block.items.1.title",
    descKey: "advantages_block.items.1.desc",
    img: secondAdvImg,
  },
  {
    id: 125,
    titleKey: "advantages_block.items.2.title",
    descKey: "advantages_block.items.2.desc",
    img: thirdAdvImg,
  },
];
