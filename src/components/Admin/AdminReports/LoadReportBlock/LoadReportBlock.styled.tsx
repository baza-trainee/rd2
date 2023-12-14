import styled from "@emotion/styled";

import {theme} from "../../../../theme/theme";


const bgInputColor = theme.palette.secondary.main;

const hoverColor = theme.palette.primary.dark;
const errorTextColor = theme.palette.error.dark;
const LoadFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: 50px;
`;

const LabelStyled = styled.label`
  position: inherit;
  z-index: 1;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
  
  background-color: ${bgInputColor};
  border-radius: 5px;
  color: #7c7c7c;
  
  transition: all 0.5s;

  span {
    padding-right: 10px;
  }

  &:hover {
    cursor: pointer;
    color: ${hoverColor};
    
    svg {
      fill: ${hoverColor};
    }
  }
`;


const InputStyled = styled.input`
  display: none;
`;

const ErrorBlock = styled.p`
  position: absolute;
  bottom: -30px;
  width: 100%;

  text-align: left;
  color: ${errorTextColor};
`;


export {LoadFieldWrapper, LabelStyled, InputStyled, ErrorBlock};