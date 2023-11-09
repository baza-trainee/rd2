import styled from "@emotion/styled";

import Typography from "@mui/material/Typography";

import {theme} from "../../theme/theme";

import imgUrl from "../../assets/images/contactPage/bgDron.jpg";

const bgColor = theme.palette.secondary.main;

const PageWrapper = styled.div`
  padding: 120px 0;
  background-color: ${bgColor} 
`

const ContentWrapper = styled.div`
    display: flex;
  justify-content: space-between;
`

const ContactFormBlock = styled.div`
    padding: 0 40px;
  width: 650px;
  
  & form {
    width: auto;
    padding: 60px 0 0;
    background: transparent;
    
    & input, & textarea {
      background-color: #ffffff;
    }
    
    & textarea {
      height: 130px;
    }
    
    & label {
      font-size: 1.125rem;
    }
  }
`
const FormTitleStyled = styled(Typography)`
  margin-bottom: 24px;
`

const OurContactsBlock = styled.div`
  width: 41%;//560px;
  height: 805px;
  
  padding: 40px;
  border-radius: 24px;
  background: center / cover no-repeat url(${imgUrl});
`

const ContactsTitleStyled = styled(Typography)`
  margin-bottom: 40px;
`
const BlockItem = styled.div`
margin-bottom: 40px;
`
const ItemTitle = styled.h5`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  text-transform: uppercase;
`

export {PageWrapper,
    ContentWrapper,
    OurContactsBlock,
    ContactFormBlock,
    ItemTitle,
    ContactsTitleStyled,
    FormTitleStyled,
    BlockItem,
}