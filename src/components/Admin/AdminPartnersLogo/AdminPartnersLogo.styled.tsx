import styled from "@emotion/styled";

import {ErrorMessage, Field} from "formik";

import {theme} from "../../../theme/theme";

const hoverColor = theme.palette.primary.dark
const errorBorderColor = theme.palette.error.main;
const errorTextColor = theme.palette.error.dark;

const LoadFieldWrapper = styled.div`
position: relative;
  margin-bottom: 50px;
`;

const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 120px;
  
  border: 2px dashed #C7C7C7;
  
  transition: all 0.5s;
  
  span {
    padding-left: 10px
  }
  svg {
    
  }
  
  &:hover {
    cursor: pointer;
    border-color: ${hoverColor};
    
    svg {
      fill: ${hoverColor};
    }
  }
  
  &.error {
    border-color: ${errorBorderColor};
  }
  
`;
const InputStyled = styled.input`
  display: none;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: -30px;
  width: 100%;
  
  text-align: center;
  color: ${errorTextColor};
`;

export {InputStyled, LabelStyled, ErrorMessageStyled, LoadFieldWrapper}