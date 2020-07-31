import React from 'react';
import FlipMove from 'react-flip-move';
import Message from './Message';

interface Props {
	messages: any[];
	userName: string;
}

const Messages: React.FC<Props> = ({ messages, userName }) => {
	let order = 0;

	return (
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
	);
};

export default Messages;
