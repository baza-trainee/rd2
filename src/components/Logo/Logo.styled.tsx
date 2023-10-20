import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const TextLogo = styled.a`
  color: #151515;
  max-width: 300px;
  display: block;
  & > h6 {
   font-weight: 800;
  }
  & span {
    display: none;
    @media (min-width: 1440px) {
      display: inline;
    }
  }
`;

export {TextLogo};