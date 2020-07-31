import React, { useState, FC, useContext, useEffect } from 'react';
import { Input, IconButton, Button } from '@material-ui/core';
import firebase from 'firebase';
import { db } from './firebase';
import SendIcon from '@material-ui/icons/Send';
import { ThemeContext } from '../shared/ThemeContext';

interface Props {
	userName: string;
}

const AddMessage: FC<Props> = ({ userName }) => {
	const [msg, setMsg] = useState('');

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
	);
};

export default AddMessage;
