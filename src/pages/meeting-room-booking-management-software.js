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
import H3 from "../components/typography/H3";
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

const IndexPage = () => {

  const clickSignUp = () => {
    var registerButton = document.getElementsByClassName('register-btn-signup');
    registerButton[0].click();
  }

  return (
    <LayoutWrapper>
      <SEO title="Meeting Room Venue Management Software" SEO description="Specifically Designed Meeting Room & Venue Management Software - Everything organised in one place, no double bookings, accept payments online -  no stress. " />
      <Header />
      <Section bgColor="accent3" height="20em" center>
        <Grid columns="100" breakAndCenter="900px">
          <div>
            <H1 center>Meeting Room Scheduling Software </H1>
            <h2 class="white-center">Manage your Meeting Rooms easier and faster than ever before. </h2>
            <StyledSignUpButton onClick={clickSignUp} href="#">👉Start 14-Day Free Trial 👈</StyledSignUpButton>
          </div>
        </Grid>
      </Section>
      <Section>
      <Grid columns="50% 50%" breakAndCenter="900px">
        <div>
        <H2>Specifically Designed Venue and Space Management Software for Meeting Rooms and Spaces.</H2>
        <p>Trying to schedule space in a busy office can be near impossible, shared Google Calendars don’t work, the old paper diary in the office is not fit for purpose and you often double book and people stand awkwardly outside the door not knowing if they should chap to disturb the meeting, am I right? Well I say no more.</p>
        <p>Our Venue Management Software has been specifically designed to manage your spaces better, easier and quicker. Each user can login to your private booking calendar and book a room </p>
        <p>Specifically designed Venue and Meeting Room Management Software - Hey Agenda can help you manage your most important assets better - your meeting rooms.</p>
        <StyledSignUpButton onClick={clickSignUp} href="#">👉Start 14-Day Free Trial 👈</StyledSignUpButton>
        </div>
        <div>
        <img src="https://s3-eu-west-2.amazonaws.com/pureoffice--live/wp-content/uploads/2019/05/14135313/nottingham-meeting-room.png" width="100%" alt="Meeting Room Venue Management Software"></img>
        </div>
      </Grid>
    </Section>
    <H2 center>Our Meeting Room Scheduling Features </H2>
      <Section>
        <FeatureInfoRow
          imgPosition="left"
          heading="Powerful Integrated Meeting Room Calendar"
          subHeading="Manage all your meeting room calendars in our easy to use software."
          imgSrc="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Product-Pages/Meeting-Spaces/meeting-room-management-software-venue-booking-system.png"
          description="See all your meeting room calendars in one easy to use software.  No staff training is required and no complicated software to learn.  You can manage all your spaces by day, week, month and see all the bookings together."
        />
        <FeatureInfoRow
          imgPosition="right"
          heading="Flawless Booking & Venue Management"
          subHeading="See at a glance the status of any booking."
          imgSrc="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/booking-system.jpg"
          description="See the status of any booking with our fully customisable booking tracking system. You can see all enquiries through their lifecycle from Enquiry to Paid. Fully customise to your own workflow by adding in custom statuses."
        />
        <FeatureInfoRow
          imgPosition="left"
          heading="Customer Management"
          subHeading="Powerful Customer Management System."
          imgSrc="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/customer-management.jpg"
          description="Never lose your customers details again because someone lost the piece of paper. Store and keep your customers information up to date. All in our easy to use Customer Management Portal."
        />
        <FeatureInfoRow
          imgPosition="right"
          heading="Invoice Management"
          subHeading="See at the glance the status of any quotation and invoice."
          imgSrc="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/invoiceManagement.jpg"
          description="At a glance see the status of any invoice, no more sitting in a meeting and the boss asks, has that invoice been paid? Now you'll know by simply filtering by paid and un"
        />
      </Section>
      <Section bgColor="accent3" height="20em" center >
        <Grid columns="100%">
          <div style={{ alignItems: "center", justifyContent: "center style" }}>
            <h2 class="white-text">Manage your Meeting Spaces better and faster than ever before, stop double bookings and live a stress free life.</h2>
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
  )
};

export default IndexPage;
