import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from './components/Message';
import { Input } from '@material-ui/core';
import { db } from './components/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

interface Message {
	text: string;
	user: string;
}

function App() {
	const [msg, setMsg] = useState('');
	const [userName, setUserName] = useState('');

	const [messages, setMessages] = useState<any[]>([]);

	useEffect(() => {
		setUserName(prompt('user name ?')!);
		setTimeout(() => {
			db.collection('messages')
				.orderBy('timestamp')
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()));
				});
		}, 100);
	}, []);
	useEffect(() => {
		if (bottomRef) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

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

	const bottomRef = useRef<HTMLDivElement>(null);
	let order = 0;
	return (
		<div className='App'>
			<h1>👋 Hello {userName || 'there'}</h1>
			<FlipMove
				enterAnimation={{
					from: {
						transform: 'scale(0)',
						opacity: '0.1',
					},
					to: {
						transform: '',
					},
				}}
			>
				{messages.map((m, i, all) => {
					order = m.user === all[i - 1]?.user ? order + 1 : 0;
					if (order !== 0) order = m.user !== all[i + 1]?.user ? -1 : order;
					return (
						<Message user={userName} key={i} msg={m} order={order}></Message>
					);
				})}
			</FlipMove>
			<form onSubmit={handleSubmit} className='app__form'>
				<Input
					className='app__form-grp'
					name='message'
					placeholder='new message'
					value={msg}
					onChange={handleChange}
				/>
				<IconButton
					color='primary'
					className='app__form-btn'
					disabled={!msg}
					type='submit'
				>
					<SendIcon />
				</IconButton>
			</form>
			<div ref={bottomRef}></div>
		</div>
	);
}

export default App;
