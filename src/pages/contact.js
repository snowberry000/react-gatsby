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
import P3 from "../components/typography/P3";
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
    <Section bgColor="accent3" height="20em" center>
      <Grid columns="1fr 0em" >
          <div>
          <H1 center>Contact Hey Agenda</H1>
        </div>
      </Grid>
    </Section>
    <Section center>
          <H2 center>Looking to get in touch?</H2>
          <P3 color="#1B1D20" center>
            There is nothing we love more than hearing from customers. </P3>
            <P3 center>If you would like to chat to us hit the button below and complete the contact form
          </P3>
          <P3 color="#1B1D20" center>
          Telephone us: <a href="tel:02030063049">02030063049</a></P3>
          <P3 color="#1B1D20" center>
          Email us: <a href="mailto:hello@heyagenda.com">hello@heyagenda.com</a></P3>
            <div>
            <StyledSignUpButton type="signupwhite" href="https://justvenue.typeform.com/to/e9AbPj" target="_blank">Contact Form</StyledSignUpButton>
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
