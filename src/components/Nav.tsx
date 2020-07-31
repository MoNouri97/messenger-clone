import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../shared/ThemeContext';

const Nav: React.FC<{ userName?: string }> = ({ userName }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='nav' style={tileBar}>
			<h1 style={{ flex: 1, margin: 0 }}>👋 Hello {userName || 'there'}</h1>
			<Button
				onClick={() => {
					toggleTheme!();
				}}
			>
				{(theme === 'light' ? 'dark' : 'light') + ' theme'}
			</Button>
		</div>
	);
};
export default Nav;
const tileBar: React.CSSProperties | undefined = {
	position: 'fixed',
	left: 0,
	right: 0,
	textAlign: 'center',
	zIndex: 1,
	background: 'var(--light-opacity)',
	top: 0,
	padding: '5px',
	margin: 0,
	display: 'flex',
	justifyContent: 'center',
};
