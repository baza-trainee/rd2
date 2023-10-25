import MainTasks from "components/About/MainTasks/MainTasks";
import Advantages from "components/About/Advantages/Advantages";

import { Test } from "components/Test/Test";
import { OurNews } from "components/About/OurNews/OurNews";
import { Partners } from "components/About/Partners/Partners";

export const About = () => {
  return (
    <>
      <MainTasks />
      <Advantages />
      <OurNews />
      <Partners />
      <Test />
    </>
  );
};
