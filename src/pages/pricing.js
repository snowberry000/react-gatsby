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
    <Section bgColor="accent3" height="20em" center>
        <Grid columns="100" breakAndCenter="900px">
          <div>
          <H1 center>Simple Pricing</H1>
          <h2 class="white-center">Grow with the right plan & bolt-on features you need.</h2>
        </div>
      </Grid>
    </Section>
    <Section>
    <div class="pricing-table">
  <div class="pricing-box">
    <h2>Single Venue</h2>
    <span class="price">Free Lifetime</span>
    <p class="description">1 Space FREE</p>
    <span class="pricing-table-divider"></span>
    <a class="btn" href="#"><b>Sign Up</b></a>
    <span class="pricing-table-divider"></span>
    <ul>
    <li>✅Unlimited Bookings</li>
    <li>✅Custom Booking Colours</li>
    <li>✅Day, Week, Month Views</li>
    <li>✅Custom Branding Colours</li>
    <li>✅White-Labelling on Emails</li>
    <li>✅10 Years Data Retention</li>
    <li>✅Phone, Video and Chat Support</li>
    <li>✅Integrations 1000+ Apps</li>
    <li>✅Payments With Stripe</li>
    <li>✅Set-up Fee Included</li>
    </ul>
    See Full Feature List
  </div>
  <div class="pricing-box">
    <h2>Small to Medium</h2>
    <span class="price">£1.66/Per Day</span>
    <p class="description">2-10 Spaces</p>
    <span class="pricing-table-divider"></span>
    <a class="btn" href="#"><b>Sign Up</b></a>
    <span class="pricing-table-divider"></span>
    <ul>
    <li>✅Unlimited Bookings</li>
    <li>✅Custom Booking Colours</li>
    <li>✅Day, Week, Month Views</li>
    <li>✅Custom Branding Colours</li>
    <li>✅White-Labelling on Emails</li>
    <li>✅10 Years Data Retention</li>
    <li>✅Phone, Video and Chat Support</li>
    <li>✅Integrations 1000+ Apps</li>
    <li>✅Payments With Stripe</li>
    <li>✅Set-up Fee Included</li>
    </ul>
    See Full Feature List
  </div>
  <div class="pricing-box pricing-table-best">
    <h2>Multi-Site</h2>
    <span class="price">Custom Pricing</span>
    <p class="description">Unlimited Spaces</p>
    <span class="pricing-table-divider"></span>
    <a class="btn" href="#"><b>Sign Up</b></a>
    <span class="pricing-table-divider"></span>
    <ul>
    <li>✅Unlimited Bookings</li>
    <li>✅Custom Booking Colours</li>
    <li>✅Day, Week, Month Views</li>
    <li>✅Custom Branding Colours</li>
    <li>✅White-Labelling on Emails</li>
    <li>✅10 Years Data Retention</li>
    <li>✅Phone, Video and Chat Support</li>
    <li>✅Integrations 1000+ Apps</li>
    <li>✅Payments With Stripe</li>
    <li>✅Set-up Fee Included</li>
    </ul>
    See Full Feature List
  </div>
</div>
</Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="100%">
          <div>
          <h3 class="white-text">No Lengthy Contracts</h3>
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
