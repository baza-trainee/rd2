import { PaymentMethod } from "types/typePaymens";
import appleLogo from "assets/images/payment/logos_apple-pay.png";
import googleLogo from "assets/images/payment/logos_google-pay.png";
import visaLogo from "assets/images/payment/logos_visaelectron.png";
import mastercardLogo from "assets/images/payment/logos_mastercard.png";

const paymentInfo: PaymentMethod[] = [
  { id: "applePay", imgSrcMain: appleLogo, text: "Pay" },
  { id: "googlePay", imgSrcMain: googleLogo, text: "Pay" },
  { id: "cardPay", imgSrcMain: visaLogo, imgSrcSecond: mastercardLogo },
];

const totalSum: string[] = ["100", "200", "500"];

export { paymentInfo, totalSum };
