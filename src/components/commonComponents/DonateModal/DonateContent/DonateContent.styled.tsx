import styled from "@emotion/styled";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import { theme } from "../../../../theme/theme";

import { Input } from "../../ContactFormSection/ContactForm/Form.styled";

const mainColor = theme.palette.primary.main;
const mainHoverColor = theme.palette.primary.dark;
const errorBorderColor = theme.palette.error.main;
const errorTextColor = theme.palette.error.dark;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const ButtonsWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
`;

const ButtonStyled = styled(Button)`
  min-width: 85px;
  width: 27%;
  height: 56px;

  padding-left: 5px;
  padding-right: 5px;

  font-size: 1rem;
  font-weight: 600;
  color: #151515;

  background-color: #ffffff;
  border: 3px solid;
  box-sizing: border-box;

  border-color: #ffffff;

  &.active {
    border-color: ${mainColor};
  }

  &:hover {
    border-color: ${mainHoverColor};
  }

  & img {
    margin-right: 5px;
    height: 16px;
    width: auto;
  }

  @media (min-width: 768px) {
    width: 115px;

    padding-left: 8px;
    padding-right: 8px;

    font-size: 1.25rem;

    & img {
      height: 20px;
    }
  }

  @media (min-width: 1280px) {
    width: 205px;
    height: 64px;

    font-size: 1.75rem;

    & img {
      height: auto;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
`;

const TypographyStyled = styled(Typography)`
  margin-bottom: 32px;
`;

const InputStyled = styled(Input)`
  height: 56px;
  background-color: #ffffff;
  border: 2px solid;
  border-color: transparent;

  transition: all 0.5s;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
  }

  &.error {
    border-color: ${errorBorderColor};
  }

  @media (min-width: 1280px) {
    height: 64px;
  }
`;

const RelativeBlock = styled.div`
  margin-bottom: 40px;
  position: relative;
`;
const ErrorMes = styled.p`
  position: absolute;
  bottom: -30px;
  color: ${errorTextColor};
`;

export {
  ButtonsWrap,
  ButtonStyled,
  TypographyStyled,
  InputStyled,
  BottomContainer,
  FormStyled,
  RelativeBlock,
  ErrorMes,
};
