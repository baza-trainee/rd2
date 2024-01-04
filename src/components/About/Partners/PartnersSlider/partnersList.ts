import partnerImg from "assets/images/partners/partner-x1.png";
import partnerBlockImg from "assets/images/partners/partner-block-x1.png";



export interface IPartners {
  id: string;
  src: string;
}
export const partners: IPartners[] = [
  { id: "123", src: partnerImg },
  { id: "456", src: partnerBlockImg },
];
