import styled from "@emotion/styled";

const TextLogo = styled.div`
  color: #151515;
  max-width: 300px;
  & > h6 {
   font-weight: 800;
  }
  & span {
    display: none;
    @media (min-width: 992px) {
      display: inline;
    }
  }
`;

export {TextLogo};