import styled from "@emotion/styled";

import {Field} from "formik";

import {theme} from "../../../theme/theme";

const hoverColor = theme.palette.primary.dark


const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 120px;
  margin-bottom: 30px;
  
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
  
`;
const FieldStyled = styled(Field)`
  display: none;
`;

export {FieldStyled, LabelStyled}