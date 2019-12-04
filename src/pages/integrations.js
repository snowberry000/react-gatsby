import React from "react";
import styled from "styled-components";
import Assets from "../components/Assets";
import Features from "../components/Features";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import P1 from "../components/typography/P1";
import FeatureInfoRow from "../components/FeatureInfoRow";
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
    <SEO title="Hey Agenda: Apps & Extensions" />
    <Header />
    <Section bgColor="accent3" height="20em" center>
      <Grid columns="100" breakAndCenter="900px">
        <div>
          <H1 center>Integrations</H1>
          <h2 class="white-center">Connect the tools you love and Speed up the Venue Booking Process.</h2>
        </div>
      </Grid>
    </Section>
    <Section>
      <FeatureInfoRow
        imgPosition="left"
        heading="Stripe Payments"
        subHeading="Accept Online Payments for Invoices"
        imgSrc="https://s8333.pcdn.co/wp-content/uploads/edd/2019/03/stripe-product-image.png"
        description="Hey Agenda + Stripe: We’ve partnered with Stripe to help businesses accept online payments. We allow you to generate an invoice to a customer and for them to be able to pay that invoice online."
      />
    </Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="100%">
        <div style={{ alignItems: "center", justifyContent: "center style" }}>
          <h3 class="white-text">Don't see the Integrations you're looking for?</h3>
          <h3 class="white-text">Please contact us via the contact form. </h3>
          <h3 class="white-text">Our Team are working hard to build more Integrations now.</h3>
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
