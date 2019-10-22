
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HamburgerContainer = styled.div`
	display: none;
	height: 32px;
	width: 32px;
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 4px;
	margin-right: 1em;			

	@media (max-width: 799px) {
		display: flex;
	}
`;

const HamburgerMenuItem = props => {
	
	const [open, setOpen] = useState(props.open);
	
	useEffect(() => {
		setOpen(props.open)
	}, [props.open])
	

	const handleClick = () => {
		setOpen(!open)
	}

	const styles = {
		line: {
			height: '2px',
			width: '20px',
			background: props.color ? props.color : 'black',
			transition: 'all 0.2s ease',
		},
		lineTop: {
			transform: open ? 'rotate(45deg)' : 'none',
			transformOrigin: 'top left',
			marginBottom: '5px',
		},
		lineMiddle: {
			opacity: open ? 0 : 1,
			transform: open ? 'translateX(-16px)' : 'none',
		},
		lineBottom: {
			transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
			transformOrigin: 'top left',
			marginTop: '5px',
		},
	}

	return (
		<HamburgerContainer
			onClick={props.onClick ? props.onClick :
				() => { handleClick(); }}>
			<div style={{ ...styles.line, ...styles.lineTop }} />
			<div style={{ ...styles.line, ...styles.lineMiddle }} />
			<div style={{ ...styles.line, ...styles.lineBottom }} />
		</HamburgerContainer>
	)
}

export default HamburgerMenuItem;