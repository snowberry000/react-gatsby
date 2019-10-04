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
    <SEO title="HeyAgenda: All in One Venue Management Software" />
    <Header />
    <Section bgColor="accent3" height="20em" center>
        <Grid columns="100" breakAndCenter="900px">
          <div>
          <H1 center>Our Features</H1>
        </div>
      </Grid>
    </Section>
    <Section>
      <FeatureInfoRow
        imgPosition="left"
        heading="Powerful Integrated Calendar"
        subHeading="Manage your calendar in our easy to use software."
        urlInfo="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/calendar.jpg"
        description="Manage your calendar by Day, Week and Even Month. See all your dates in one easy place. See all upcoming events in one easy to use dashboard."
      />
      <FeatureInfoRow
        imgPosition="right"
        heading="Flawless Venue Management"
        subHeading="See at a glance the status of any booking"
        urlInfo="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/booking-system.jpg"
        description="See the status of any booking with our fully customisable booking tracking system. You can see all enquiries through their lifecycle from Enquiry to Paid. Fully customise to your own workflow by adding in custom statuses."
      />
      <FeatureInfoRow
        imgPosition="left"
        heading="Customer Management"
        subHeading="Powerful Customer Management System"
        urlInfo="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/customer-management.jpg"
        description="Never lose your customers details again because someone lost the piece of paper. Store and keep your customers information up to date. All in our easy to use Customer Management Portal."
      />
      <FeatureInfoRow
        imgPosition="right"
        heading="Invoice Management"
        subHeading="See at the glance the status of any quotation and invoice."
        urlInfo="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/invoicemangement.jpg"
        description="At a glance see the status of any invoice, no more sitting in a meeting and the boss asks, has that invoice been paid? Now you'll know by simply filtering by paid and un"
      />
  </Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="1fr 1em" breakAndCenter="850px">
          <div style={{ alignItems: "center", justifyContent: "center style" }}>
          <h2 class="white-text">Ditch the admin, Get paid on time and live a stress-free life.</h2>
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
