import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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

    & input,
    & textarea {
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
    form {
      & > div:nth-of-type(3),
      & > div:nth-of-type(4) {
        width: 48%;
      }
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

export { ContactFormBlock, FormTitleStyled };
