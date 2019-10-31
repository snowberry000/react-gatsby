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
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import Li from "../components/typography/P2";
import Venues from "../components/Venues";
import colors from "../components/style/colors";
import "../main.css";
import Footer from "../components/Footer";

import Helmet from 'react-helmet'

const StyledSignUpButton = styled.a`
  background: #00A698;
  border: 2px solid #00A698;
  color: #fff;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.35em;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  max-width: 100px;
  :hover{
    filter: brightness(0.8);
  }
  :active {
    filter: brightness(0.8);
  }


  @media screen and (max-width: 850px) {
    align-self: center;
    margin-top: 1rem;
  }
`;

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="HeyAgenda: All in One Venue Management Software" />
    <Header />
    <Section bgColor="accent3" height="20em" left>
      <Grid columns="1fr 22em" breakAndCenter="850px">
          <div style={{ alignItems: "left", justifyContent: "left" }}>
          <H1>About Hey Agenda</H1>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    <Section height="20em" left>
      <Grid columns="1fr 39em" breakAndCenter="850px">
        <div class="div1">
        <h2>Why did we start Hey Agenda?</h2>
        </div>
      <div class="div2">
      <p>We were tired of seeing Venue Management Platforms charging extortionate amounts for outdated, over complicated software, tying businesses into long-term contracts, and quite frankly ignoring those businesses' needs. </p>
      <p>We built a solution to put our clients at the heart of everything we do, to help businesses like yours monitor and grow their venues through the power of a simple easy to use software platform that does not charge an arm and a leg.</p>
      <p>Our bespoke plans can be tailored to suit any business' needs, both growing and new venues alike. Let’s face it, you would not wear shoes that were to small for you and hurt like hell, so why be shoe-horned into a plan that doesn't work for your business?</p>
      </div>
      </Grid>
    </Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="1fr 1em" breakAndCenter="850px">
          <div style={{ alignItems: "center", justifyContent: "center style" }}>
          <h2 class="white-text">❝Fair pricing, no long contracts and industry-leading features - for everyone.❞
          </h2>
        </div>
      </Grid>
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
    <Section center>
          <H2 center>Still undecided?</H2>
          <P1 color="#1B1D20" center>
            We're here to help, sign up for a demo today.
          </P1>
            <div>
            <StyledSignUpButton type="signupwhite" href="https://heyagenda.youcanbook.me/?noframe=true&skipHeaderFooter=true">Book a Demo ☎️️</StyledSignUpButton>
            </div>
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
        data-popup-selector=".register-btn-signup"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
    </Helmet>
  </LayoutWrapper>
);

export default IndexPage;
