import React from "react";
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

const NavMenu = props => {
	return (
		<React.Fragment>
			<DesktopNavMenu />
			<MobileNavMenu open={props.open}/>
		</React.Fragment>
	)
}

export default NavMenu;