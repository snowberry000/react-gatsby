import React from "react";
import styled from "styled-components";
import Assets from "./Assets";
import H3 from "./typography/H3";
import H4 from "./typography/H4";

const FeaturesWrapper = styled.ul`
  list-style-type: none;
  list-style: none;
  padding: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 30em;
`;

const Feature = styled.li`
  padding: none;
  margin: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5em 0te;
`;

const features = [
  { text: "Flawless Venue Management", icon: <Assets.Icons.Management /> },
  { text: "Powerful Integrated Calendar", icon: <Assets.Icons.Calendar /> },
  { text: "Invoice Management", icon: <Assets.Icons.Management /> },
  { text: "Room Management", icon: <Assets.Icons.Room /> },
  { text: "Quotation Management", icon: <Assets.Icons.Quotation /> },
  { text: "Accept Online Payments", icon: <Assets.Icons.Payments /> },
  { text: "Integrations (coming soon)", icon: <Assets.Icons.Integrations /> }
];

const Features = props => {
  return (
    <FeaturesWrapper>
      {features.map((feature, index) => (
        <Feature key={index}>
          {feature.icon} <H4 style={{ margin: "0 0 0 1.1em" }}>{feature.text}</H4>
        </Feature>
      ))}
    </FeaturesWrapper>
  );
};

export default Features;
