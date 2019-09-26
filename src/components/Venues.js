import React from "react";
import styled from "styled-components";
import Grid from "./layout/Grid";
import Community from "../images/venueCommunity.jpg";
import Church from "../images/venueChurch.jpg";
import FunctionRoom from "../images/venueFunctionRoom.jpg";
import Meeting from "../images/venueMeeting.jpg";
import H3 from "./typography/H3";
import colors from "./style/colors";

const Venue = styled.div`
  display: block;
  padding-bottom: 100%;
  height: 0;
  background: url(${props => props.image});
  background-size: cover;
  position: relative;
  overflow: hidden;
  border-radius: 1.2em;
  :nth-child(1) {
    box-shadow: -1em 1em 0 0 ${colors.accent1}30;
  }
  :nth-child(2) {
    box-shadow: -1em 1em 0 0 ${colors.accent2}30;
  }
  :nth-child(3) {
    box-shadow: -1em 1em 0 0 ${colors.accent3}30;
  }
  :nth-child(4) {
    box-shadow: -1em 1em 0 0 ${colors.accent1}30;
  }
  > div {
    background: hsla(222, 12%, 10%, 0.5);
    padding: 1em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      line-height: 1.5;
      margin: 0;
    }
  }
`;

const Venues = props => {
  return (
    <Grid columns="1fr 1fr 1fr 1fr" break="900px">
      <Venue image={Community}>
        <div>
          <H3 center color="white">
            Community Centres
          </H3>
        </div>
      </Venue>
      <Venue image={Church}>
        <div>
          <H3 center color="white">
            Church Halls
          </H3>
        </div>
      </Venue>
      <Venue image={FunctionRoom}>
        <div>
          <H3 center color="white">
            Function Suites
          </H3>
        </div>
      </Venue>
      <Venue image={Meeting}>
        <div>
          <H3 center color="white">
            Meeting Rooms
          </H3>
        </div>
      </Venue>
    </Grid>
  );
};

export default Venues;
