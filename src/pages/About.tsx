import MainTasks from "components/About/MainTasks/MainTasks";
import Advantages from "components/About/Advantages/Advantages";

import {Carousel} from "components/About/Carousel/Carousel";

import { OurNews } from "components/About/OurNews/OurNews";
import { Partners } from "components/About/Partners/Partners";
import ContactFormSection from "components/commonComponents/ContactFormSection/ContactFormSection";

export const About = () => {

  return <>
    <Carousel />
    <MainTasks />
    <Advantages />
    <OurNews />
    <Partners />
    <ContactFormSection />
  </>;

};
