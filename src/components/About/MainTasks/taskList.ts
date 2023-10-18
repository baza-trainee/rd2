import { Task } from "types/enums/typeTask";

import firstIcon from "../../../assets/icons/TaskIcons/first.svg";
import secondIcon from "../../../assets/icons/TaskIcons/second.svg";
import thirdIcon from "../../../assets/icons/TaskIcons/third.svg";
import fourthIcon from "../../../assets/icons/TaskIcons/fourth.svg";
import fifthIcon from "../../../assets/icons/TaskIcons/fifth.svg";
import sixthIcon from "../../../assets/icons/TaskIcons/sixth.svg";

const taskList: Task[] = [
  {
    id: 321,
    icon: firstIcon,
        desc: `Впровадження принципово нового підходу, що дозволяє дистанційно, з використанням 
               БПЛА, проводити дослідження по виявленню локацій вибухонебезпечних предметів.`,
  },
  {
    id: 322,
    icon: secondIcon,
      desc: `Використання технологій, заснованих на методі сканування (ПЕМЗ) – зондування
             території разом із аналізом випромінювань аномалій пошукових об'єктів.`,
  },
  {
    id: 323,
    icon: thirdIcon,
    desc: "Проведення тестових польових робіт в реальних умовах.",
  },
  {
    id: 324,
    icon: fourthIcon,
      desc: `Очищення території України, оскільки 30% території країни наразі забруднено мінами
            і вибухонебезпечними предметами.`,
  },
  {
    id: 325,
    icon: fifthIcon,
    desc: "Складання карт забруднених територій та об’єктів в Україні.",
  },
  {
    id: 326,
    icon: sixthIcon,
      desc: `Впровадження новітніх методів розмінування, так як при сьогоднішніх технологіях
             на розмінування території України знадобиться більше 750 років.`,
  },
];
export default taskList;