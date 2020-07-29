import React, { FC, forwardRef, useEffect } from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import './Message.css';

interface Props {
	msg: { text: string; user: string };
	user: string;
	order: number;
}

const Message = forwardRef<HTMLDivElement, Props>(
	({ msg, user, order }, ref) => {
		useEffect(() => {
			console.log('rendered');
		}, []);

		const isUser = user === msg.user && msg.user;
		return (
			<div
				ref={ref}
				className={`message 
				${isUser ? 'message__user' : 'message__guest'} 
				${order == 0 ? 'first' : ''} 
				${order == -1 ? 'last' : ''}`}
			>
				{!isUser && (
					<div className='message__userName'>{msg.user || 'anonymous'}</div>
				)}
				<div className='message__content'>{msg.text}</div>
			</div>
		);
	},
);

export default Message;
