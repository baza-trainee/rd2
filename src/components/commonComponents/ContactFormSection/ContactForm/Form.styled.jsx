import styled from "@emotion/styled";

import { theme } from "theme/theme";

const errorBorderColor = theme.palette.error.main;
const errorTextColor = theme.palette.error.dark;

const FormEl = styled.form`
  width: 100%;
  border-radius: 24px;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  padding: 62px 16px 32px 16px;
  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 98px 60px 60px 60px;
  }
  @media screen and (min-width: 1280px) {
    width: 712px;
  }
`;

const FieldContainer = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 51px;
  }
  &:last-child {
    margin-bottom: 32px;
  }
`;

const Input = styled.input`
  height: 64px;
  width: 100%;
  font-size: 20px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 16px;
  outline: none;
  &.error {
    border: 2px solid ${errorBorderColor};
  }
`;

const FieldLabel = styled.label`
  position: absolute;
  top: -38px;
  left: 0;
  font-weight: 600;
  color: #151515;
  line-height: 30px;
  font-size: 20px;
  pointer-events: none;
  text-transform: capitalize;

  @media screen and (min-width: 1280px) {
    line-height: 27.24px;
  }
`;

const Textarea = styled.textarea`
  font-size: 20px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 16px;
  height: 190px;
  outline: none;
  width: 100%;
  resize: none;
  &.error {
    border: 2px solid ${errorBorderColor};
  }
`;

const FormError = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: ${errorTextColor};
  margin-top: 3px;
`;

export { FormEl, FieldContainer, Input, FieldLabel, Textarea, FormError };
