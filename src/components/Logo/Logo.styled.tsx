import styled from "@emotion/styled";

const TextLogo = styled.div`
  color: #151515;
  max-width: 300px;
  & > h6 {
   font-weight: 800;

    & span {
      display: inline;

      @media (min-width: 768px) {
        display: none;
      }
    }
    & span:first-of-type {
      display: none;
      @media (min-width: 768px) {
        display: inline;
      }
    }
  }
  & span {
    display: none;
    @media (min-width: 1280px) {
      display: inline;
    }
  }
`;

export {TextLogo};