import React from "react";
import styled from "styled-components";

import Grid from "../components/layout/Grid";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P2 from "../components/typography/P2";
import colors from "../components/style/colors";

const StyledH3 = styled(H3)`
  margin-bottom: 0.5em;
`;

const StyledFeatureContent = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

const StyledMoreInformation = styled.a`
  background: none;
  border: 2px solid ${colors.accent3};
  color: ${colors.accent3};
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.25em;
  outline: none;
  cursor: pointer;
  display: inline-block;
  :hover{
    opacity: 0.8;
  }
  :active {
    filter: brightness(0.8);
  }
`;

const SpaceFeature = styled.div`
  height: 4em;
`;

const FeatureInfoRow = ({
  heading,
  subHeading,
  description,
  imgPosition,
  imgSrc,
}) => {
  return (
    <React.Fragment>
      <Grid columns="50% 50%" breakAndCenter="900px">
        {imgPosition === "left" ? (
          <React.Fragment>
            <StyledFeatureContent>
              <img src={imgSrc} />
            </StyledFeatureContent>
            <StyledFeatureContent>
              <div>
                <H2 left color="accent3">{heading}</H2>
                <StyledH3 left color="accent3">{subHeading}</StyledH3>
                <P2>{description}</P2>
                <StyledMoreInformation>
                  More Information  >
                            </StyledMoreInformation>
              </div>
            </StyledFeatureContent>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <StyledFeatureContent>
                <div>
                  <H2 left color="accent3">{heading}</H2>
                  <StyledH3 left color="accent3">{subHeading}</StyledH3>
                  <P2>{description}</P2>
                  <StyledMoreInformation>
                    More Information  >
                                    </StyledMoreInformation>
                </div>
              </StyledFeatureContent>
              <StyledFeatureContent>
                <img src={imgSrc} />
              </StyledFeatureContent>
            </React.Fragment>
          )
        }
      </Grid>
      <SpaceFeature />
    </React.Fragment>
  )
}

export default FeatureInfoRow;
