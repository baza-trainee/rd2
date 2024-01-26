import mobImg from "assets/images/introduce/mob-min.jpg";
import mobImg2 from "assets/images/introduce/mob2-min.jpg";
import mobImg2x from "assets/images/introduce/mob@2x-min.jpg";
import mobImg2x2 from "assets/images/introduce/mob2@2x-min.jpg";

import tabImg from "assets/images/introduce/tab-min.jpg";
import tabImg2 from "assets/images/introduce/tab2-min.jpg";
import tabImg2x from "assets/images/introduce/tab@2x-min.jpg";
import tabImg2x2 from "assets/images/introduce/tab2@2x-min.jpg";

import deskImg from "assets/images/introduce/desk-min.jpg";
import deskImg2 from "assets/images/introduce/desk2-min.jpg";
import deskImg2x from "assets/images/introduce/desk@2x-min.jpg";
import deskImg2x2 from "assets/images/introduce/desk2@2x-min.jpg";

interface IntroduceCard {
  id: number;
  desktopImage: string;
  desktopImage2: string;
  tabletImage: string;
  tabletImage2: string;
  mobileImage: string;
  mobileImage2: string;
}

export const introduceList: IntroduceCard[] = [
  {
    id: 1,
    desktopImage: deskImg,
    desktopImage2: deskImg2x,
    tabletImage: tabImg,
    tabletImage2: tabImg2x,
    mobileImage: mobImg,
    mobileImage2: mobImg2x,
  },
  {
    id: 2,
    desktopImage: deskImg2,
    desktopImage2: deskImg2x2,
    tabletImage: tabImg2,
    tabletImage2: tabImg2x2,
    mobileImage: mobImg2,
    mobileImage2: mobImg2x2,
  },
];

export type { IntroduceCard };
