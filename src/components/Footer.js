import React from "react";
import Section from "../components/layout/Section";
import Grid from "../components/layout/Grid";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import A2 from "../components/typography/A2";

const Footer = () => {
	return (
		<Section small bgColor="lighter">
			<Grid columns="repeat(auto-fill, minmax(160px, 1fr));">
				<div>
					<P1 strong>Contact Us</P1>
					<P2 strong><a href="tel:+442030063049">020 3006 3049</a></P2>
					<A2 strong><a href="mailto:hello@heyagenda.com">hello@heyagenda.com</a></A2>
				</div>
				<div>
					<P1 strong>Product</P1>
					<li><a href="/how-it-works">How it works</a></li>
					<li><a href="/features">Features</a></li>
					<li><a href="/pricing">Pricing</a></li>
				</div>
				<div>
					<P1 strong>Resources</P1>
					<li><a href="http://help.heyagenda.com/support/kb#/categories">Help Desk</a></li>
				</div>
				<div>
					<P1 strong>Company</P1>
					<li><a href="/about-us">About Us</a></li>
					<li><a href="http://help.heyagenda.com/support/kb#/articles/qrm0azQX/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
					<li><a href="/contact">Contact</a></li>
				</div>
			</Grid>
	  	</Section>
	)
}

export default Footer;
