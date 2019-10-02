import React from "react";
import Section from "../components/layout/Section";
import Grid from "../components/layout/Grid";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import A1 from "../components/typography/A1";
import A2 from "../components/typography/A2";

const Footer = () => {
	return (
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
	)
}

export default Footer;