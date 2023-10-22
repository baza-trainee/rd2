import styled from "@emotion/styled";

import {Nav} from "../../Nav/Nav";

const NavContainer = styled.div`
    display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`

const NavStyled = styled(Nav)`
  display: flex;
  width: 670px;
  justify-content: space-between;
  
  a {
    font-weight: 600;
    color: #151515;
  }
`

export {NavContainer, NavStyled}