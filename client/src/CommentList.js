import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
	const [ comments, setComments ] = useState([]);

	const fetchComments = async () => {
		const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

		setComments(res.data);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const renderedComments = comments.map((comment) => {
		return (
			<li className="list-group-item" key={comments.id}>
				{comment.content}
			</li>
		);
	});

	return <ul className="list-group list-group-flush">{renderedComments}</ul>;
};
