import styled from "@emotion/styled";
import { Nav } from "components/Nav/Nav";

export const FooterSection = styled.footer`
  padding: 40px 0;
  list-style: none;
`;
export const Content = styled.div`
  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 50px;
  }
`;
export const FooterNav = styled.div`
  margin-top: 40px;
  @media (min-width: 600px) {
    display: flex;
    gap: 24px;
  }
  @media (min-width: 850px) {
    margin-top: 0;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  gap: 32px;
  @media (min-width: 600px) {
    gap: 24px;
  }
`;
export const FooterNavigation = styled(Nav)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
	@media (min-width: 850px) {
    width: 176px;
  }
	@media (min-width: 1100px) {
    width: 240px;
  }
	@media (min-width: 1440px) {
    width: 320px;
  }
`;
export const RulesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: underline;
  @media (min-width: 850px) {
    width: 176px;
  }
	@media (min-width: 1100px) {
    width: 240px;
  }
	@media (min-width: 1440px) {
    width: 320px;
  }
`;
export const RulesItem = styled.li`
  cursor: pointer;
`;
export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 70px;
  font-style: normal;
  @media (min-width: 600px) {
    margin-top: 0;
    font-size: 16px;
  }
	@media (min-width: 850px) {
    width: 176px;
  }
	@media (min-width: 1100px) {
    width: 266px;
  }
	@media (min-width: 1440px) {
    width: 346px;
  }
`;
export const AddressItem = styled.p`
  display: flex;
  gap: 4px;
  text-transform: none;
`;
export const Rights = styled.p`
  margin-top: 40px;
  font-size: 12px;
	@media (min-width: 850px) {
		margin-top: 24px;
    font-size: 16px;
  }
`;
