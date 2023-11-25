/* eslint-disable max-len */
import imageOne from "assets/images/ourNews/news-one-x1.png";
import imageTwo from "assets/images/ourNews/news-two-x1.png";
import imageThree from "assets/images/ourNews/news-three-x1.png";
import retinaImageOne from "assets/images/ourNews/news-one-x2.png";
import retinaImageTwo from "assets/images/ourNews/news-two-x2.png";
import retinaImageThree from "assets/images/ourNews/news-three-x2.png";

export interface ListNews {
  id: number;
  image: string;
  retinaImg: string;
  title: string;
  description: string;
  date: string;
}

export const list: ListNews[] = [
  {
    id: 1,
    image: imageOne,
    retinaImg: retinaImageOne,
    title:
      "Ukraine is now the most mined country. It will take decades to make safe.— The Washington Post.",
    description:
      "In a year and a half of conflict, land mines — along with unexploded bombs, artillery shells and other...",
    date: "22 липня 2023",
  },
  {
    id: 2,
    image: imageTwo,
    retinaImg: retinaImageTwo,
    title:
      "Науковці НАН України представили свої розробки на форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    description: "Захід відбувся 17 травня 2023 року в Києві...",
    date: "25 травня 2023",
  },
  {
    id: 3,
    image: imageThree,
    retinaImg: retinaImageThree,
    title:
      "Установи НАН України візьмуть участь у форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    description: "Науковці Академії продемонструють свої  розр...",
    date: "12 травня 2023",
  },
];
