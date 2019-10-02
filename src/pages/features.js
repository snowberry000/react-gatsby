import React from "react";
import styled from "styled-components";
import Assets from "../components/Assets";
import Header from "../components/Header";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P2 from "../components/typography/P2";
import "../main.css";
import Footer from "../components/Footer";
import Button from "../components/Button";

import Helmet from 'react-helmet'
import colors from "../components/style/colors";

const StyledH3 = styled(H3)`
  margin-bottom: 0.5em;
`;

const StyledFeatureContent = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

const StyledMoreInformation = styled.a`
  background: none;
  border: 2px solid ${colors.accent3};
  color: ${colors.accent3};
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
  display: inline-block;
  :hover{
    opacity: 0.8;
  }
  :active {
    filter: brightness(0.8);
  }
`;

const SpaceFeature = styled.div`
  height: 4em;
`;

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="HeyAgenda: All in One Venue Management Software" />
    <Header />
    <Section bgColor="accent3" height="20em" left>
      <Grid columns="1fr 22em" breakAndCenter="850px">
          <div style={{ alignItems: "left", justifyContent: "left" }}>
          <H1>Hey Agenda Features</H1>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    
    <Section>
      <Grid columns="50% 50%" breakAndCenter="900px">
        <StyledFeatureContent>
          <img 
            src="https://cdn.skedda.com/assets/images-www/features/client-booking-system-w635-23f7abe5aa4567b06fed01a2b48a148c.webp"/>
        </StyledFeatureContent>        
        <StyledFeatureContent>
          <div>
            <H2 left color="accent3">Feature Heading</H2>
            <StyledH3 left color="accent3">Feature Sub Heading</StyledH3>
            <P2>
              Your Skedda calendar is the focal point for your venue's bookings. It provides the perspectives you need to digest all activity at a glance. You can choose to share your unique calendar URL (e.g. https://skedstudios.skedda.com) with the public, or enforce privacy through secure invitation links and logins.
              Your Skedda calendar is the focal point for your venue's bookings. It provides the perspectives you need to digest all activity at a glance. You can choose to share your unique calendar URL (e.g. https://skedstudios.skedda.com) with the public, or enforce privacy through secure invitation links and logins.

              Your Skedda calendar is the focal point for your venue's bookings. It provides the perspectives you need to digest all activity at a glance. You can choose to share your unique calendar URL (e.g. https://skedstudios.skedda.com) with the public, or enforce privacy through secure invitation links and logins.
            </P2>
            <StyledMoreInformation>
              More Information  >
            </StyledMoreInformation> 
          </div>         
        </StyledFeatureContent>
      </Grid>
      <SpaceFeature />
      <Grid columns="50% 50%" breakAndCenter="900px">      
        <StyledFeatureContent>
          <div>
            <H2 left color="accent3">Feature Heading</H2>
            <StyledH3 left color="accent3">Feature Sub Heading</StyledH3>
            <P2>
              Your Skedda calendar is the focal point for your venue's bookings. It provides the perspectives you need to digest all activity at a glance. You can choose to share your unique calendar URL (e.g. https://skedstudios.skedda.com) with the public, or enforce privacy through secure invitation links and logins.
            </P2>
            <StyledMoreInformation>
              More Information  >
            </StyledMoreInformation>          
          </div>
        </StyledFeatureContent>
        <StyledFeatureContent>
          <img 
            src="https://cdn.skedda.com/assets/images-www/features/client-booking-system-w635-23f7abe5aa4567b06fed01a2b48a148c.webp"/>
        </StyledFeatureContent>  
      </Grid>
      <SpaceFeature />
    </Section>
    <Footer />
    <Helmet>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="login"
        data-popup-selector="#login-btn">
      </script>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="register"
        data-popup-selector=".register-btn-header"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="register"
        data-popup-selector=".register-btn-signup"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
    </Helmet>
  </LayoutWrapper>
);

export default IndexPage;
