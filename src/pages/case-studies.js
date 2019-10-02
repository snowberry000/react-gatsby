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
          <H1>Hey Agenda Case Studies</H1>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    <Section height="20em" left>
      <Grid columns="1fr 39em" breakAndCenter="850px">
        <div class="div1">
        <h2>Who are we?</h2>
        </div>
      <div class="div2">
        <p>We're on a relentless pursuit to make the events industry easier for everyone. We're not just solving problems by using software, but we're trying to make the events industry more accessible for everyone.</p>
        <p>In 2016, We started off by creating <a href="https://www.justvenue.com">Just Venue</a>, an Online Venue Booking Platform to help customers find and book space for free. We then wanted to help our Venues Manage these bookings more efficiently and created Hey Agenda, an Online Venue Management Software</p>
        <p>We created this to solve the needs of our hosts, to make their lives easier and make the booking process better for everyone. We want you to cut out the admin tasks and go back to what you enjoy, putting on events and attending to customers.</p>
        <p>But we’re not stopping there. This is just the begining..</p>
      </div>
      </Grid>
    </Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="1fr 1em" breakAndCenter="850px">
          <div style={{ alignItems: "center", justifyContent: "center style" }}>
          <h2 class="white-text">❝Our Mission is to make event booking an enjoyable experience for the guest and the host. To make life simplier and remove administrative burden.❞
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
