import React from 'react';
import styled from "styled-components";
import ButtonsRow from "./../layout/ButtonsRow";
import colors from "./../style/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const NavBarMobile = styled(ButtonsRow)`		
	display: none;
	position: absolute;
	width: 100%;
	top: 100%;
	padding: 0 2em;
	background-color: white;
	@media (max-width: 799px) {
		display: inline-block;
	}
`;

const NavBarMobileContent = styled.div`
	display: none;
	flex-direction: column;
	width: calc(100% - 4em);
	background-color: white;
	padding: 1em 0;
  &.expanded {
    position: absolute;
    top: 100%;
    z-index: 9999;
    display: flex;
	}	
`;

const DropDown = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	&:hover {
		.dropdown-menu {
			display: flex;
		}
	}

	.dropdown-menu {
		display: none;
		flex-direction: column;
		margin: 0 0 0 1em;
		position: relative;
		border-left: 3px solid #6B50C8;		
		padding: 0;
    font-size: 1.05em;
    outline: none;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    background: none;
		color: #A4989D;		
		.dropdown-menu-item {
			display: flex;			
			text-decoration: none !important;
		}
	}	
`;

const StyledSignUpButton = styled.a`
  position: relative;
  color: ${colors.grey};  
  padding: 0.6em 1em;
  font-size: 1.05em;
  outline: none;
  cursor: pointer;
  text-decoration: none;  
  :active {
    filter: brightness(0.8);
  }
`;

const MobileNavMenu = (props) => {
	return (
		<NavBarMobile>
			<NavBarMobileContent className={props.open ? "expanded" : ""}>				
				<StyledSignUpButton href="/features">Features</StyledSignUpButton>
				<StyledSignUpButton href="http://help.heyagenda.com/support/kb#/categories">Integrations</StyledSignUpButton>
				<DropDown>
					<StyledSignUpButton className="menu-item">
						Examples <FontAwesomeIcon icon={faAngleDown} />
					</StyledSignUpButton>
					<div className="dropdown-menu">
						<div className="dropdown-menu-item">
							<StyledSignUpButton href="http://help.heyagenda.com/support/kb#/categories">
								Meeting Rooms
							</StyledSignUpButton>
						</div>
						<div>
							<StyledSignUpButton href="http://help.heyagenda.com/support/kb#/categories">
								Sports Venue
							</StyledSignUpButton>
						</div>
					</div>
				</DropDown>
				<StyledSignUpButton href="/pricing">Pricing</StyledSignUpButton>
				<StyledSignUpButton href="http://help.heyagenda.com/support/kb#/categories">More</StyledSignUpButton>
				<StyledSignUpButton id="login-btn" href="#">Login</StyledSignUpButton>
				<StyledSignUpButton className="register-btn-header register-btn-signup" href="#">Sign Up</StyledSignUpButton>
			</NavBarMobileContent>
		</NavBarMobile>

	)
}

export default MobileNavMenu;