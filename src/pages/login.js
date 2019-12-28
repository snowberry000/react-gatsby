import React, {useEffect, useState} from "react";
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
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P1 from "../components/typography/P1";
import Venues from "../components/Venues";
import Footer from "../components/Footer";
import LaptopVideoPlayer from "../components/LaptopVideoPlayer";

import "../main.css";

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

  const [authCallbackUrl, setAuthCallbackUrl] = useState("https://app.heyagenda.com/login")
  useEffect(() => {
    if (window.location.href.indexOf('returnUrl=') > 0) {
      setAuthCallbackUrl(
        window.location.href.substring(
          window.location.href.indexOf('returnUrl=') + 'returnUrl='.length,
          window.location.href.indexOf('access_token'))
        )      
    }    
  }, [])

	const onLoginOutSetaLoad = () => {
		setTimeout(() => {
			var loginButton = document.getElementById('login-btn');		
			loginButton.click();
		}, 500)		
	}

	const handleScriptInject = ({ scriptTags }) => {
		console.log(scriptTags)
    if (scriptTags) {
        const scriptTag = scriptTags[0];
        scriptTag.onload = onLoginOutSetaLoad;
    }
  }
  
  const clickSignUp = () => {
    var registerButton = document.getElementsByClassName('register-btn-signup');
    registerButton[0].click();
  }
    
  return (
    <LayoutWrapper>
      <SEO title="All in One Simple Venue Booking Software" SEO description="Get it together and manage your venues the right way. Everything organised in one place, no double bookings, no stress. All in one simple venue booking software" />
      <Header />
      <Section bgColor="accent3" height="30em" left>
        <Grid columns="1fr 22em" breakAndCenter="850px">
            <div style={{ alignItems: "left", justifyContent: "left" }}>
            <H1>Get it together and manage your venues the right way.</H1>
            <h2 class="white-center-margin">Everything organised in one place, no double bookings, no stress. All in One Simple Venue Booking Software. </h2>
            <StyledSignUpButton onClick={clickSignUp} href="#">👉Start 14-Day Free Trial 👈</StyledSignUpButton>
            {/* <p1>No credit card required. Cancel anytime.</p1> */}
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
        <H3 center>Online Venue Management Software Features</H3>
        <Grid columns="40% 60%" fullHeight breakAndCenter="800px">
          <Features />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Assets.Illustrations.BookingFlow />
          </div>
        </Grid>
      </Section>
      <Section>
        <H3 center>Video of our Venue Management Software</H3>
        <LaptopVideoPlayer videoUrl="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/final_5dc45b959b66d5001325882c_927754.mp4" />
      </Section>
      <Section>
      <H3 center>What we offer as standard in our all our plans</H3>
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

      <Helmet onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}>
        <script
          type="text/javascript"
          src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
          data-widget-mode="login"
          data-popup-selector="#login-btn"
          auth-callback-url={authCallbackUrl}>
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
