import styled from "@emotion/styled";

import Typography from "@mui/material/Typography";

import {theme} from "../../theme/theme";

import imgUrl from "../../assets/images/contactPage/bgDron.jpg";

const bgColor = theme.palette.secondary.main;

const PageWrapper = styled.div`
  padding: 50px 0 20px;
  background-color: ${bgColor};

  @media (min-width: 768px) {
  padding: 120px 0;
}
`;

const ContentWrapper = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto;
  max-width: 900px;

  @media (min-width: 1280px) {
    max-width: 100%;
  }
`;

const ContactFormBlock = styled.div`
    padding: 0 40px;
  margin-bottom: 50px;
  width: 100%;
  
  & form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
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

    & > div {
      width: 100%;
    }
  }
  
  @media (min-width: 768px) {
    & > div:nth-of-type(3), & > div:nth-of-type(4) {
      width: 48%;
    }
  }
  
  @media (min-width: 1280px) {
    width: 650px;
    margin-bottom: 0;
  }
`;
const FormTitleStyled = styled(Typography)`
  margin-bottom: 24px;
`;

const OurContactsBlock = styled.div`
  width: 100%;
  height: 805px;
  
  padding: 40px;
  border-radius: 24px;
  background: center / cover no-repeat url(${imgUrl});

  @media (min-width: 1280px) {
    width: 41%;
  }
`;

const ContactsTitleStyled = styled(Typography)`
  margin-bottom: 40px;
`;
const BlockItem = styled.div`
margin-bottom: 40px;
`;
const ItemTitle = styled.h5`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export {PageWrapper,
  ContentWrapper,
  OurContactsBlock,
  ContactFormBlock,
  ItemTitle,
  ContactsTitleStyled,
  FormTitleStyled,
  BlockItem,
};