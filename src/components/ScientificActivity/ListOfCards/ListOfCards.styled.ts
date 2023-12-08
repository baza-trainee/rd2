import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  @media (min-width: 768px) {
    row-gap: 40px;
  }
  @media (min-width: 1280px) {
    row-gap: 24px;
  }
`;
