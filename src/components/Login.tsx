import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';

const Login: React.FC<{ setUserName: (name: string) => void }> = ({
	setUserName,
}) => {
	const [name, setName] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleSubmit = () => {
		setUserName(name);
		localStorage.setItem('userName', name);
	};
	return (
		<Box style={{ marginTop: '50px', padding: '10px' }}>
			<form onSubmit={handleSubmit} style={style}>
				<TextField
					className='app__form-grp'
					name='name'
					value={name}
					onChange={handleChange}
					label='Name'
					variant='filled'
				/>
				<div>
					<Button type='submit'>Ok</Button>
				</div>
			</form>
		</Box>
	);
};

export default Login;
const style: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	borderRadius: '10px',
	background: ' var(--light-opacity)',
	boxShadow: '1px 1px 10px var(--shadow)',
	maxWidth: '500px',
	margin: '50px auto',
	padding: '20px ',
};
