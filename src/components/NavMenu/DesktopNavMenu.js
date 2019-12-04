import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ButtonsRow from "./../layout/ButtonsRow";
import colors from "./../style/colors";

const NavBar = styled(ButtonsRow)`
  margin-left: auto;
  padding: 0 2em;
  z-index: 1;
  align-items: center;

  .register-btn-signup {
    margin: 1em;
	}

  @media (max-width: 899px) {
    padding-left: 0;
  }

	@media (max-width: 799px) {
		display: none;
	}
`;

const StyledSignUpButton = styled.a`
  position: relative;
  background: ${props => colors[props.color] || colors.accent1};
  border: 2px solid ${props => colors[props.color] || colors.accent1};
  color: white;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  :active {
    filter: brightness(0.8);
  }
  ${props =>
		props.type === "secondary" &&
		`
    background: none;
    color: ${colors.accent1};
  `}
  ${props =>
		props.type === "tertiary" &&
		`
    background: none;
    border: none;
    color: ${colors.grey};
  `}

  &.has-sub-menu {
    height: 100%;
    display: flex;
    align-items: center;

    .fa-angle-down {
      margin-left: 5px;
      transform: translateY(2px);
    }

    .dropdown {
      position: absolute;
      display: none;
      top: 100%;
      left: 0;
      padding: 0 1em;
      background-color: white;
      margin-top: 2px;
      li {
        padding: 1em 0;
        text-decoration: none;
        white-space: nowrap;
        &:hover {
          color: #6B50C8;
        }
      }
    }

    &:hover {
      .dropdown {
        display: block;
      }
    }
  }

  @media (max-width: 1280px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  @media (max-width: 999px) {
    padding-left: 1em;
    padding-right: 1em;
  }

  @media (max-width: 899px) {
    padding-left: 0.7em;
    padding-right: 0.7em;
  }
`;

const DesktopNavMenu = () => {

	return (
		<NavBar>
			<StyledSignUpButton type="tertiary" href="/features">Features</StyledSignUpButton>
			<StyledSignUpButton type="tertiary" href="/integrations">Integrations</StyledSignUpButton>
			<StyledSignUpButton className="has-sub-menu" type="tertiary">
				Examples <FontAwesomeIcon icon={faAngleDown} />
				<ul className="dropdown">
          <a href="/meeting-room-booking-management-software"><li>Meeting Rooms</li></a>
          <a href="/community-centres-booking-management-software"><li>Community Centres</li></a>
					<a href="/sports-venue-booking-management-software"><li>Sports Venue</li></a>
					<a href="/professional-studios-booking-management-software"><li>Professional Studios</li></a>
					<a href="/coworking-space-booking-management-software"><li>Coworking Spaces</li></a>
          <a href="/church-halls-booking-management-software"><li>Church Halls</li></a>
					<a href="/classroom-labs-booking-management-software"><li>Classrooms and Labs</li></a>
          <a href="/function-suite-booking-management-software"><li>Function Suites</li></a>
					<a href="/consulting-rooms-booking-management-software"><li>Consulting Rooms</li></a>
				</ul>
			</StyledSignUpButton>
			<StyledSignUpButton type="tertiary" href="/pricing">Pricing</StyledSignUpButton>
			<StyledSignUpButton type="tertiary" id="login-btn" href="#">Login</StyledSignUpButton>
			<StyledSignUpButton className="register-btn-header register-btn-signup" href="#">Sign Up</StyledSignUpButton>
		</NavBar>
	)
}

export default DesktopNavMenu;
