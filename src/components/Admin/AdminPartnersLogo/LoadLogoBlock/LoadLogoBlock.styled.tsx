import styled from "@emotion/styled";
import { ErrorBlock } from "components/commonComponents/ErrorBlock/ErrorBlock";

import { theme } from "../../../../theme/theme";

const hoverColor = theme.palette.primary.dark;
const errorBorderColor = theme.palette.error.main;

const LoadFieldWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 40px;
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
  max-width: 100%;
  height: auto;
  max-height: 100%;
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

const ErrorBlockStyled = styled(ErrorBlock)`
  width: 100%;
  bottom: -25px;
  text-align: center;
`;

export { InputStyled, LabelStyled, ErrorBlockStyled, LoadFieldWrapper, LoadedImg };
