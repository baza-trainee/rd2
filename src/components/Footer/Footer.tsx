import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { contactsList } from "components/commonComponents/ContactItem/contactsList";
import { ContactItem } from "components/commonComponents/ContactItem/ContactItem";
import { FooterLogo } from "components/Footer/FooterLogo/FooterLogo";
import { FooterReports } from "components/Footer/FooterReports/FooterReports";
import {
  FooterSection,
  Content,
  FooterNav,
  FooterNavigation,
  Address,
  Rights,
} from "components/Footer/Footer.styled";

export const Footer = () => {
  const { t } = useTranslation();

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterSection>
      <Container maxWidth="xl">
        <Content>
          <FooterLogo />

          <FooterNav>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <FooterNavigation className="custom-nav-class" onClick={clickHandler} />
              </Grid>

              <Grid item xs={6} md={4}>
                <FooterReports />
              </Grid>

              <Grid item xs={12} md={4}>
                <Address>
                  {contactsList.map((item) => (
                    <ContactItem key={item.id} {...item} />
                  ))}
                </Address>
              </Grid>
            </Grid>
          </FooterNav>
        </Content>

        <Rights>{t("developers")}</Rights>
      </Container>
    </FooterSection>
  );
};
