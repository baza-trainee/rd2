import { FormEvent, ChangeEvent, MouseEvent, useState } from "react";

type PaymentProps = {
  amount: number;
  method: string;
  amountError?: string;
  methodError?: string;
};

export const usePaymentForm = (func: () => void) => {
  const initialState: PaymentProps = {
    amount: 0,
    method: "",
  };

  const [payment, setPayment] = useState(initialState);
  const [inputValue, setInputValue] = useState<number | string>("");

  const onClickPayment = (e: MouseEvent<HTMLButtonElement>) => {
    setPayment({ ...payment, method: e.currentTarget.id, methodError: "" });
  };

  const onClickSum = (e: MouseEvent<HTMLButtonElement>) => {
    setPayment({ ...payment, amount: +e.currentTarget.id, amountError: "" });
    setInputValue(+e.currentTarget.id);
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    setInputValue(value);
    setPayment({ ...payment, amount: +value, amountError: "" });
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    if (!payment.amount || !payment.method.length) {
      let errorMesAmount = "";
      let errorMesMethod = "";

      if (!payment.amount) errorMesAmount = "Вкажіть сумму";

      if (!payment.method) errorMesMethod = "Вкажіть метод оплати";

      setPayment({
        ...payment,
        amountError: errorMesAmount,
        methodError: errorMesMethod,
      });

      return;
    }

    func();
  };

  return { payment, onClickPayment, inputValue, onClickSum, onChangeValue, onSubmitForm };
};
