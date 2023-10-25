import MainTasks from "components/About/MainTasks/MainTasks";
import Advantages from "components/About/Advantages/Advantages";
import { OurNews } from "components/About/OurNews/OurNews";
import ContactFormSection from "components/commonComponents/ContactFormSection/ContactFormSection";


export const About = () => {
  return <>
    <MainTasks />
    <Advantages />
    <OurNews />
    <ContactFormSection />
    </>
};
