import React from "react";

import {paymentInfo, totalSum} from "./donateButtonsInfo";

import {ButtonStyled, ButtonsWrap, ErrorMes} from "./DonateContent.styled";

type PaymentBtnsProps = {
    btnInfo: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    errorMes?: string;
}

const PaymentAmountBtns = ( {onClick, btnInfo}:PaymentBtnsProps ) => {
  return (
    <ButtonsWrap >

      {totalSum.map((item) => (
        <ButtonStyled variant="contained"
          key={item}
          id={item}
          className={( item === btnInfo)? "active" : ""}
          onClick={onClick}
        >
          {item} UAH
        </ButtonStyled>
      ))}

    </ButtonsWrap>
  );
};

const PaymentInfoBtns = ( {onClick, btnInfo, errorMes}:PaymentBtnsProps ) => {
  return (
    <ButtonsWrap >

      {paymentInfo.map((info) => (
        <ButtonStyled
          variant="contained"
          className={(info.id === btnInfo)? "active" : ""}
          key={info.id}
          id={info.id}
          onClick={onClick}
        >

          <img src={info.imgSrcMain} alt="payment method"/>
          {info.text ? <span>{info.text}</span> : null}
          {info.imgSrcSecond ? <img src={info.imgSrcSecond} alt="payment method"/> : null}
        </ButtonStyled>
      ))}

      { errorMes && <ErrorMes>{errorMes}</ErrorMes> }

    </ButtonsWrap>
  );
};

export { PaymentAmountBtns, PaymentInfoBtns };