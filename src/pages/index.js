import React from "react";
import Assets from "../components/Assets";
import BuildingsStrip from "../components/BuildingsStrip";
import Features from "../components/Features";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import SignupForm from "../components/SignupForm";
import A1 from "../components/typography/A1";
import A2 from "../components/typography/A2";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import H4 from "../components/typography/H4";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import Venues from "../components/Venues";
import "../main.css";

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="Home" />
    <Header />
    <Section bgColor="accent1" height="34em" center>
      <Grid columns="1fr 22em" breakAndCenter="850px">
        <div>
          <H1>hassle free venue management</H1>
          <H4 color="white">
            Manage all your venues and spaces in one easy to use the platform.
            Get&nbsp;paid&nbsp;on&nbsp;time and live a stress-free life.
          </H4>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    <BuildingsStrip bgColor="accent1" />
    <Section small center>
      <H3 center color="grey">
        We think managing your venues and spaces should be simple and fast. We've created the right
        tool for it.
      </H3>
      <H2 style={{ display: "inline-block", margin: ".5em 1em .5em 0" }}>Try it today</H2>
      <SignupForm />
    </Section>
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
    <Section center>
      <H2 center>Sign up for free</H2>
      <P1 color="grey" center>
        Stop stressing about venue management now.
      </P1>
      <br />
      <SignupForm />
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
  </LayoutWrapper>
);

export default IndexPage;
