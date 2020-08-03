import React from 'react';
import Message from './Message';

interface Props {
	messages: any[];
	userName: string;
}

const Messages: React.FC<Props> = ({ messages, userName }) => {
	let order = 0;

	return (
		<div style={{ marginTop: '70px' }}>
			{messages.map((m, i, all) => {
				order = m.user === all[i - 1]?.user ? order + 1 : 0;
				if (order !== 0) order = m.user !== all[i + 1]?.user ? -1 : order;
				return (
					<Message user={userName} key={i} msg={m} order={order}></Message>
				);
			})}
		</div>
	);
};

export default Messages;
