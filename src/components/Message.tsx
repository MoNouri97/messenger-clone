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
	console.log(isUser);

	return (
		<Card className={`message ${isUser ? 'message__user' : 'message__guest'}`}>
			<CardContent>
				<Typography color='textSecondary' variant='h5' component='h2'>
					{msg.user} : {msg.text}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Message;
