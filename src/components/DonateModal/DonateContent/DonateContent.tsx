import React from "react";

import Button from "@mui/material/Button";

import {usePaymentForm} from "../../../hooks/usePaymentForm";

import {
  BottomContainer, ErrorMes, FormStyled,
  InputStyled, RelativeBlock,
  TypographyStyled,
} from "./DonateContent.styled";

import {PaymentAmountBtns, PaymentInfoBtns} from "./PaymentButtons";

type DonateContentProps = {
    onChangeSuccess: () => void
}

const DonateContent = ({onChangeSuccess}:DonateContentProps) => {

  const {payment, onClickPayment,
    inputValue, onClickSum, onChangeValue,
    onSubmitForm} = usePaymentForm(onChangeSuccess);

  return (
    <FormStyled onSubmit={onSubmitForm}>
      <TypographyStyled variant="h3" align="center">
                Оберіть суму внеску
      </TypographyStyled>

      <PaymentAmountBtns
        btnInfo={payment.amount.toString()}
        onClick={onClickSum}
      />

      <RelativeBlock>
        <InputStyled
          placeholder="Інша сумма"
          type="number"
          className={payment.amountError ? "error" : ""}
          value={inputValue}
          onChange={onChangeValue}
        />
        { payment.amountError
                    && <ErrorMes>{payment.amountError}</ErrorMes>
        }
      </RelativeBlock>

      <TypographyStyled variant="h3"  align="center">
                Оберіть спосіб оплати
      </TypographyStyled>

      <PaymentInfoBtns
        btnInfo={payment.method}
        errorMes = {payment.methodError}
        onClick={onClickPayment}
      />

      <BottomContainer>
        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          type="submit"
        >
                    оплатити
        </Button>
      </BottomContainer>
    </FormStyled>
  );
};

export {DonateContent};
