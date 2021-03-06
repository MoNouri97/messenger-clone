import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { db } from './components/firebase';
import Messages from './components/Messages';
import AddMessage from './components/AddMessage';
import { Button } from '@material-ui/core';
import { ThemeContextProvider } from './shared/ThemeContext';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
	const [userName, setUserName] = useState('');

	const [messages, setMessages] = useState<any[]>([]);

	useEffect(() => {
		// userName
		const name = localStorage.getItem('userName');
		if (name) {
			setUserName(name);
		}
		// messages from db
		setTimeout(() => {
			db.collection('messages')
				.orderBy('timestamp')
				.onSnapshot(snapshot => {
					setMessages(snapshot.docs.map(doc => doc.data()));
				});
		}, 100);
	}, []);
	useEffect(() => {
		if (bottomRef) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	useEffect(() => {
		localStorage.setItem('userName', userName);
	}, [userName]);

	const bottomRef = useRef<HTMLDivElement>(null);
	return (
		<div className='App'>
			<ThemeContextProvider>
				<Nav
					userName={userName}
					disconnect={() => {
						setUserName('');
					}}
				></Nav>
				{!userName && <Login setUserName={setUserName}></Login>}
				{userName && (
					<>
						<Messages {...{ messages, userName }}></Messages>
						<AddMessage userName={userName}></AddMessage>
						<div ref={bottomRef}></div>
					</>
				)}
			</ThemeContextProvider>
		</div>
	);
}

export default App;
