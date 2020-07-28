import React, { FC } from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import './Message.css';
const useStyles = makeStyles({
	root: {
		width: 275,
	},
});

interface Props {
	msg: { text: string; user: string };
	user: string;
}

const Message: FC<Props> = ({ msg, user }) => {
	const classes = useStyles();
	const isUser = user === msg.user;

	return (
		<div className={`message ${isUser ? 'message__user' : 'message__guest'}`}>
			{!isUser && <div className='message__user'>{msg.user}</div>}
			<div className='message__content'>
				<Typography variant='h5' component='h2'>
					{msg.text}
				</Typography>
			</div>
		</div>
	);
};

export default Message;
