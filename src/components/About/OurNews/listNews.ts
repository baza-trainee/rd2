/* eslint-disable max-len */
import imageOne from "assets/images/ourNews/news-one.png";
import imageTwo from "assets/images/ourNews/news-two.png";
import imageThree from "assets/images/ourNews/news-three.png";

export interface ListNews {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

export const list: ListNews[] = [
  {
    id: 1,
    image: imageOne,
    title:
      "Ukraine is now the most mined country. It will take decades to make safe.— The Washington Post.",
    description:
      "In a year and a half of conflict, land mines — along with unexploded bombs, artillery shells and other...",
    date: "22 липня 2023",
  },
  {
    id: 2,
    image: imageTwo,
    title:
      "Науковці НАН України представили свої розробки на форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    description: "Захід відбувся 17 травня 2023 року в Києві...",
    date: "25 травня 2023",
  },
  {
    id: 3,
    image: imageThree,
    title:
      "Установи НАН України візьмуть участь у форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    description: "Науковці Академії продемонструють свої  розр...",
    date: "12 травня 2023",
  },
];
