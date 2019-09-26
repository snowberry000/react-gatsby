import React from "react";
import styled from "styled-components";
import Assets from "./Assets";
import Grid from "./layout/Grid";
import colors from "./style/colors";
import H4 from "./typography/H4";
import P2 from "./typography/P2";

const InfoCardWrapper = styled.div`
  display: block;
  padding: 2.5em 2em;
  @media (min-width: 1250px) {
    padding: 2.8em 3.2em;
    margin: 0 -3.2em;
  }
  background: ${colors.accent3};
  border-radius: 1.2em;
  box-shadow: -1em 1em 0 0 #e9ccff;
`;

const InfoPoint = styled.div``;

const copy = [
  {
    title: "24/7 Support",
    icon: <Assets.Icons.Support />,
    body: "Our Team are on hand to help by email and telephone.  Should you have any issues."
  },
  {
    title: "Cloud-Based",
    icon: <Assets.Icons.Cloud />,
    body:
      "You can access your venue management software from anywhere, on the road, at home or in another office.  Plus its all backed up in the cloud."
  },
  {
    title: "Secure and Trusted",
    icon: <Assets.Icons.Security />,
    body:
      "Our platform is super secure using SSL encryption to make sure your site is safe and secure."
  },
  {
    title: "You're in control",
    icon: <Assets.Icons.Security />,
    body:
      "No long term binding contracts, cancel whenever you want. Sign up for free today for a free trial."
  }
];

const InfoCard = props => {
  return (
    <InfoCardWrapper>
      <Grid columns="1fr 1fr 1fr 1fr" breakAndCenter="700px">
        {copy.map((p, index) => (
          <InfoPoint key={index}>
            {p.icon}
            <H4 color="white">{p.title}</H4>
            <P2 color="white">{p.body}</P2>
          </InfoPoint>
        ))}
      </Grid>
    </InfoCardWrapper>
  );
};

export default InfoCard;
