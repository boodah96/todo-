import React from 'react';
import {Toast, Badge, ListGroup } from 'react-bootstrap';

const TodoList = (props) => {
	return (
	
		
		<ListGroup>
		{props.list.map((item) => (
			<Toast
			className={`complete-${item.complete.toString()}`}
			// 	{props.list.map((item) => (
			// 		<ListGroup.Item
			// 			action
			// 			variant={item.complete ? 'danger' : 'success'}
			// 			className={`complete-${item.complete.toString()}`}
			// 			key={item._id}
				key={item._id}
				onClose={() => {
					props.handleDelete(item._id, 'delete');
				}}
			>
				<Toast.Header>
					<Badge pill variant={item.complete ? 'success' : 'danger'}>
						{item.complete ? 'Pending' : 'Complete'}
					</Badge>
					<strong className="mr-auto" style={{ marginLeft: '20px' }}>
						{item.assignee}
					</strong>
				</Toast.Header>
				<Toast.Body
					onClick={() => {
						props.handleComplete(item._id, 'put');
					}}
				>
					{item.text}
					<div class="difficulty">Difficulty: {item.difficulty}</div>
				</Toast.Body>
			</Toast>
		))}
	</ListGroup>
	);
};

export default TodoList;