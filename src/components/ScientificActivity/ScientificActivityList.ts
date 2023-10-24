import { TypeScientificActivity } from "types/typeActivity";

import img_1 from "../../assets/images/activity/Img_1-min.png";
import img_2 from "../../assets/images/activity/Img_2-min.png";
import img_3 from "../../assets/images/activity/Img_3-min.png";
import img_4 from "../../assets/images/activity/Img_4-min.png";
import img_5 from "../../assets/images/activity/Img_5-min.png";
import img_1_2x from "../../assets/images/activity/Img_1-min2х.png";
import img_2_2x from "../../assets/images/activity/Img_2-min2х.png";
import img_3_2x from "../../assets/images/activity/Img_3-min2х.png";
import img_4_2x from "../../assets/images/activity/Img_4-min2x.png";
import img_5_2x from "../../assets/images/activity/Img_5-min2x.png";

export const ScientificActivityList: TypeScientificActivity[] = [
  {
    id: 11,
    title: "ІННОВАЦІЇ",
    text: `Колектив ДП НДЦПН «Георесурс» НАН України разом з спеціалістами
    Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил
     підтримки Збройних Сил України проводить тестування новітнього методу
      дистанційного розмінування територій.`,
    img: img_1,
    retinaImg: img_1_2x,
  },
  {
    id: 12,
    title: "МЕТОДИКА",
    text: `Методика полягає в тому, що квадрокоптер, знаходячись над землею,
   визначає місцезнаходження мін методом електромагнітного зондування.
    Методика визначає, де знаходяться металеві та неметалеві вибухонебезпечні
     предмети, де саме і наскільки глибоко в землі. Роботи виконуються без
      безпосередньої участі людини на забрудненій території.`,
    img: img_2,
    retinaImg: img_2_2x,
  },
  {
    id: 13,
    title: "ДИСТАНЦІЙНІСТЬ",
    text: `Це принципово новий підхід, що дозволяє оперативно в дистанційному
   режимі з використанням БПЛА проводити дослідження по виявленню локації
    мін та після обробки даних надавати карту їх знаходження з прив’язкою до
     системи координат JPS.`,
    img: img_3,
    retinaImg: img_3_2x,
  },
  {
    id: 14,
    title: "ВАЖЛИВІСТЬ",
    text: `На території України є необхідність забезпечити маркування  і складення карт
   територій України та об’єктів, забруднених та імовірно забруднених
    вибухонебезпечними предметами задля безпеки українців.`,
    img: img_4,
    retinaImg: img_4_2x,
  },
  {
    id: 15,
    title: "АКТУАЛЬНІСТЬ",
    text: `Визначення місць з чіткими координатами вибухонебезпечних предметів
   надасть дуже велику допомогу ізолювання небезпечних місць та
   пришвидшить в рази можливість гуманітарного розмінування територій України.`,
    img: img_5,
    retinaImg: img_5_2x,
  },
];
