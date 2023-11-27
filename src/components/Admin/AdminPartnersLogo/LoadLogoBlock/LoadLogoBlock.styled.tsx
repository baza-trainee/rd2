import styled from "@emotion/styled";

import { theme } from "../../../../theme/theme";

const hoverColor = theme.palette.primary.dark;
const errorBorderColor = theme.palette.error.main;
const errorTextColor = theme.palette.error.dark;

const LoadFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: 200px;
  
  outline: 2px dashed #c7c7c7;
`;

const LabelStyled = styled.label`
  position: inherit;
  z-index: 1;
  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  outline: 2px dashed #c7c7c7;
  opacity: 0;
  transition: all 0.5s;

  span {
    padding-left: 10px;
  }
  svg {
  }

  &:hover {
    cursor: pointer;
    outline-color: ${hoverColor};
    svg {
      fill: ${hoverColor};
    }
  }

  &.error {
      outline-color: ${errorBorderColor};

    &:hover {
      outline-color: ${hoverColor};
    }
  }
  
  &.entering  {
  opacity: 0;
},
&.entered  {
  opacity: 1;
},
  &.exiting  {
  opacity: 0;
}
`;


const InputStyled = styled.input`
  display: none;
`;

const LoadedImg = styled.img`
  width: auto;
  height: 100%;
  display: block;
  margin: auto;
  padding: 10px 0;

  opacity: 0;
  transition: opacity 0.5s;

  &.entering {
    opacity: 0;
  },
  &.entered  {
  opacity: 1;
},
&.exiting  {
  opacity: 0;
}
`;

const ErrorBlock = styled.p`
  position: absolute;
  bottom: -30px;
  width: 100%;

  text-align: center;
  color: ${errorTextColor};
`;

export { InputStyled, LabelStyled, ErrorBlock, LoadFieldWrapper, LoadedImg };
