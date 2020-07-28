import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './components/Message';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
	const [msg, setMsg] = useState('');
	const [messages, setMessages] = useState<{ text: string; user: string }[]>([
		{ text: 'hi', user: 'nouri' },
	]);
	const [userName, setUserName] = useState('');
	useEffect(() => {
		setUserName(prompt('user name ?')!);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMsg(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMessages([...messages, { text: msg, user: userName }]);
		setMsg('');
	};

	return (
		<div className='App'>
			<h1>
				Hello World <span>👌</span>
			</h1>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<InputLabel>Email address</InputLabel>
					<Input
						name='message'
						placeholder='new message'
						value={msg}
						onChange={handleChange}
					/>
					<Button
						disabled={!msg}
						variant='outlined'
						color='primary'
						type='submit'
					>
						Send
					</Button>
				</FormControl>
			</form>
			{messages.map((m, i) => (
				<Message user={userName} key={i} msg={m}></Message>
			))}
		</div>
	);
}

export default App;
