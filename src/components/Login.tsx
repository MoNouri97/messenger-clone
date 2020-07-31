import React, { useState } from 'react';
import { Box, Input, TextField, Button } from '@material-ui/core';

const Login: React.FC<{ setUserName: (name: string) => void }> = ({
	setUserName,
}) => {
	const [name, setName] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setUserName(name);
	};
	return (
		<Box>
			<form onSubmit={handleSubmit} style={style}>
				<TextField
					className='app__form-grp'
					name='name'
					placeholder='new message'
					value={name}
					onChange={handleChange}
					label='Name'
					variant='filled'
				/>
				<Button type='submit'>Ok</Button>
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
