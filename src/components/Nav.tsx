import React, { useContext, useEffect } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { ThemeContext } from '../shared/ThemeContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface Props {
	userName?: string;
	disconnect: () => void;
}
const Nav: React.FC<Props> = ({ userName, disconnect }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='nav' style={tileBar}>
			<h1 style={{ flex: 1, margin: 0 }}>👋 Hello {userName || 'there'}</h1>

			<IconButton
				onClick={() => {
					toggleTheme!();
				}}
			>
				<Brightness4Icon />
			</IconButton>
			{userName && (
				<IconButton
					onClick={() => {
						disconnect();
					}}
					color='primary'
				>
					<ExitToAppIcon />
				</IconButton>
			)}
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
	boxShadow: '1px 1px 10px var(--shadow)',
};
