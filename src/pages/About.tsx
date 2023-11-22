import MainTasks from "components/About/MainTasks/MainTasks";
import Advantages from "components/About/Advantages/Advantages";

import { Carousel } from "components/About/Carousel/Carousel";

import { Introduce } from "components/About/Introduce/Introduce";

import { OurNews } from "components/About/OurNews/OurNews";
import { Partners } from "components/About/Partners/Partners";
import ContactFormSection from "components/commonComponents/ContactFormSection/ContactFormSection";

export const Component = () => {
  return (
    <>
      <Carousel />

      <Introduce />

      <MainTasks />

      <Advantages />

      <OurNews />

      <Partners />

      <ContactFormSection />
    </>
  );
};

Component.displayName = "About";
