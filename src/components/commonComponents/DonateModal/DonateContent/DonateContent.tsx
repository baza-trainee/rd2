import React from "react";

import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";

import { usePaymentForm } from "../../../../hooks/usePaymentForm";

import {
  BottomContainer,
  ErrorMes,
  FormStyled,
  InputStyled,
  RelativeBlock,
  TypographyStyled,
} from "./DonateContent.styled";

import { PaymentAmountBtns, PaymentInfoBtns } from "./PaymentButtons";

type DonateContentProps = {
  onChangeSuccess: () => void;
};

const DonateContent = ({ onChangeSuccess }: DonateContentProps) => {
  const { t } = useTranslation();

  const { payment, onClickPayment, inputValue, onClickSum, onChangeValue, onSubmitForm } =
    usePaymentForm(onChangeSuccess);

  return (
    <FormStyled onSubmit={onSubmitForm}>
      <TypographyStyled variant="h3" align="center">
        {t("donate_modal.payment_amount")}
      </TypographyStyled>

      <PaymentAmountBtns btnInfo={payment.amount.toString()} onClick={onClickSum} />

      <RelativeBlock>
        <InputStyled
          placeholder={t("donate_modal.another_amount")}
          type="number"
          className={payment.amountError ? "error" : ""}
          value={inputValue}
          onChange={onChangeValue}
        />
        {payment.amountError && <ErrorMes>{payment.amountError}</ErrorMes>}
      </RelativeBlock>

      <TypographyStyled variant="h3" align="center">
        {t("donate_modal.payment_method")}
      </TypographyStyled>

      <PaymentInfoBtns
        btnInfo={payment.method}
        errorMes={payment.methodError}
        onClick={onClickPayment}
      />

      <BottomContainer>
        <Button variant="contained" size="large" fullWidth={true} type="submit">
          {t("buttons.pay")}
        </Button>
      </BottomContainer>
    </FormStyled>
  );
};

export { DonateContent };
