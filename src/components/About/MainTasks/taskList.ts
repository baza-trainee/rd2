import { Task } from "types/typeTask";

import firstIcon from "assets/icons/TaskIcons/first.svg";
import secondIcon from "assets/icons/TaskIcons/second.svg";
import thirdIcon from "assets/icons/TaskIcons/third.svg";
import fourthIcon from "assets/icons/TaskIcons/fourth.svg";
import fifthIcon from "assets/icons/TaskIcons/fifth.svg";
import sixthIcon from "assets/icons/TaskIcons/sixth.svg";

export const taskList: Task[] = [
  {
    id: 1,
    icon: firstIcon,
    descKey: "main_tasks_block.desc.item_1",
  },
  {
    id: 2,
    icon: secondIcon,
    descKey: "main_tasks_block.desc.item_2",
  },
  {
    id: 3,
    icon: thirdIcon,
    descKey: "main_tasks_block.desc.item_3",
  },
  {
    id: 4,
    icon: fourthIcon,
    descKey: "main_tasks_block.desc.item_4",
  },
  {
    id: 5,
    icon: fifthIcon,
    descKey: "main_tasks_block.desc.item_5",
  },
  {
    id: 6,
    icon: sixthIcon,
    descKey: "main_tasks_block.desc.item_6",
  },
];
