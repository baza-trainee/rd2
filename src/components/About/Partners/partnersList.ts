import partnerImg from "assets/images/partners/partner-x1.png";
import partnerRetinaImg from "assets/images/partners/partner-x2.png";
import partnerBlockImg from "assets/images/partners/partner-block-x1.png";

export interface IPartners {
  id: number;
  imageSrc: string;
  retinaImageSrc: string;
}

export const partners: IPartners[] = [
  { id: 1, imageSrc: partnerImg, retinaImageSrc: partnerRetinaImg },
  { id: 2, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 3, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 4, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 5, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 6, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 7, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
  { id: 9, imageSrc: partnerBlockImg, retinaImageSrc: partnerBlockImg },
];
