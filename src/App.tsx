import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './components/Message';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { db } from './components/firebase';
import firebase from 'firebase';
interface Message {
	text: string;
	user: string;
}
function App() {
	const [msg, setMsg] = useState('');
	const [messages, setMessages] = useState<any[]>([
		{ text: 'hi', user: 'nouri' },
	]);
	const [userName, setUserName] = useState('');

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp')
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data()));
			});
		setUserName(prompt('user name ?')!);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMsg(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		db.collection('messages').add({
			text: msg,
			user: userName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		// setMessages([...messages, { text: msg, user: userName }]);
		setMsg('');
	};

	return (
		<div className='App'>
			<h1>
				Hello World <span>👌</span>
			</h1>

			{messages.map((m, i) => (
				<Message user={userName} key={i} msg={m}></Message>
			))}
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
		</div>
	);
}

export default App;
