import { Advantage } from "types/typeAdvantage";

import firstAdvImg from "../../../assets/images/advantages/unique-technologies.png";
import secondAdvImg from "../../../assets/images/advantages/demining-teams.png";
import thirdAdvImg from "../../../assets/images/advantages/explosive-objects.png";

const advantageList: Advantage[] = [
  {
    id: 123,
    title: "Унікальні технології",
    desc: `Україна зацікавлена в розвитку технологій для власного виживання, відбудовування
         і розвитку. Наразі ми в стані впевнено зайняти перше місце в світі по унікальності
         технологій, випробуваних в польових умовах.`,
    img: firstAdvImg,
  },
  {
    id: 124,
    title: "Бригади розміновування",
    desc: `Більш ніж 500 бригад саперів, які щоденно ризикують життям, знадобиться, щоб
         розмінувати забруднені території. Ми пропонуємо розмінування без участі людини
          - виключно дистанційно.`,
    img: secondAdvImg,
  },
  {
    id: 125,
    title: "Вибухонебезпечні предмети",
    desc: `Наша методологія дозволяє визначити і знешкодити міни, які внаслідок часу опустились
         в землю і не помітні наочно. Шукати їх вручну вкрай небезпечно. `,
    img: thirdAdvImg,
  },
];
export default advantageList;