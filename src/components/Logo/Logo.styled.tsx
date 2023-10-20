import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const TextLogo = styled.a`
  color: #151515;
  max-width: 300px;
  display: block;
  & > h6 {
   font-weight: 800;
  }
`;

const LogoH6 = styled(Typography)`
  font-weight: 800;
`

export {TextLogo}