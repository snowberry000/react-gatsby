import React from "react";
import styled from "styled-components";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import LaptopBottomImg from "../images/Laptop-bottom.png";
import H3 from "../components/typography/H3";

const VideoContainer = styled.div`
  position: relative;
  width: 88%;
  margin: 0 auto;
  border-top: 1.8rem solid #062840;
  border-left: 1rem solid #062840;
  border-right: 1rem solid #062840;
  border-bottom: 1.2rem solid #062840;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: calc(-0.6rem - 8px);
    position: absolute;
    left: calc(50% - 5px);
    background-color: black;
  }
`;

const LaptopBottom = styled.img`
  width: 100%;
`;

const LaptopVideoPlayer = ({videoUrl}) => {
	return (
		<React.Fragment>
			<VideoContainer>
				<Player autoPlay loop={true} muted><source src={videoUrl}/></Player>
			</VideoContainer>
			<LaptopBottom src={LaptopBottomImg} />
			<H3 center>See all product features</H3>
		</React.Fragment>
	)
}

export default LaptopVideoPlayer;