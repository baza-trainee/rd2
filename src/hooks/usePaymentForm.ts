import React, {useState} from "react";

type PaymentProps = {
    amount: number,
    method: string,
    amountError?: string,
    methodError?: string,
}

const usePaymentForm = () => {

    const initialState:PaymentProps = {
        amount: 0,
        method: "",
    }

    const [payment, setPayment] = useState(initialState);
    const [inputValue, setInputValue] = useState< number | string>("")

    const onClickPayment = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPayment({...payment, method: e.currentTarget.id, methodError: ""});
    }

    const onClickSum = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPayment({...payment, amount: +e.currentTarget.id, amountError: ""});
        setInputValue(+e.currentTarget.id)
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.trim();
        setInputValue(value);
        setPayment({...payment, amount: +value, amountError: ""});
    }

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (!payment.amount || !payment.method.length) {
            let errorMesAmount="";
            let errorMesMethod="";

          if (!payment.amount) errorMesAmount = "Вкажіть сумму";

          if (!payment.method) errorMesMethod = "Вкажіть метод оплати";

          setPayment({...payment, amountError: errorMesAmount, methodError: errorMesMethod});
          return;
        }

        console.log(payment);
    }

    return {payment, onClickPayment, inputValue, onClickSum, onChangeValue, onSubmitForm}

}

export {usePaymentForm}