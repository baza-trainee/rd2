import MainTasks from "components/About/MainTasks/MainTasks";
import Advantages from "components/About/Advantages/Advantages";

import {Carousel} from "components/About/Carousel/Carousel";
import { Test } from "components/Test/Test";
import { OurNews } from "components/About/OurNews/OurNews";

export const About = () => {
  return (
    <>
      <Carousel />
      <MainTasks />
      <Advantages />
      <OurNews />
      <Test />
    </>
  );
};
