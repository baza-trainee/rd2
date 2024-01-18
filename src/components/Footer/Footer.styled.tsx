import styled from "@emotion/styled";

import { Nav } from "components/commonComponents/Nav/Nav";

export const FooterSection = styled.footer`
  padding: 40px 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;
export const FooterNav = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1280px) {
    width: 76%;
  }
`;

export const FooterNavigation = styled(Nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top: 1rem;
  border-top: 1px solid;

  @media (min-width: 468px) {
    padding-top: 5%;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    border-top: none;
  }
`;

export const Rights = styled.p`
  margin-top: 1.5rem;
  font-size: 12px;

  @media (min-width: 468px) {
    margin-top: 40px;
  }
`;
