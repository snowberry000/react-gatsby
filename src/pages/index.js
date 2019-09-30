import React from "react";
import styled from "styled-components";
import Assets from "../components/Assets";
import BuildingsStrip from "../components/BuildingsStrip";
import Features from "../components/Features";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import A1 from "../components/typography/A1";
import A2 from "../components/typography/A2";
import H1 from "../components/typography/H1";
import H3 from "../components/typography/H3";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import Venues from "../components/Venues";
import colors from "../components/style/colors";
import "../main.css";

import Helmet from 'react-helmet'

const StyledSignUpButton = styled.a`
  background: ${props => colors[props.color] || colors.accent3};
  border: 2px solid ${props => colors[props.color] || colors.accent3};
  color: white;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  float: left;
  :active {
    filter: brightness(0.8);
  }  
`;

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="Home" />
    <Header />
    <Section bgColor="accent1" height="34em" center>
      <Grid columns="1fr 22em" breakAndCenter="850px">
        <div>
          <H1>All in one venue management software</H1>
          <StyledSignUpButton className="register-btn-signup" href="#">Sign Up</StyledSignUpButton>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    <BuildingsStrip bgColor="accent1" />
    <Section center>
      <H3 center>Types of Venues Managed With Our Software</H3>
      <Venues />
    </Section>
    <Section>
      <Grid columns="40% 60%" fullHeight breakAndCenter="800px">
        <Features />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.BookingFlow />
        </div>
      </Grid>
    </Section>
    <Section>
      <InfoCard />
    </Section>
    <Section />
    <Section small bgColor="lighter">
      <Grid columns="1fr 1fr 1fr">
        <div>
          <P1 strong>Contact Us</P1>
          <P2>020 3006 3049</P2>
          <A2 href="mailto:hello@justvenue.co.uk">hello@justvenue.co.uk</A2>
        </div>
        <div>
          <A1 strong href="!#">
            Privacy Policy
          </A1>
        </div>
        <div>
          <A1 strong href="!#">
            Terms
          </A1>
        </div>
      </Grid>
    </Section>
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
