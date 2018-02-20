require('isomorphic-fetch');

const getFetchOptions = {method: 'GET', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const postFetchOptions = {method: 'POST', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const posts = async () => {
	const response = await fetch('http://localhost:5000/posts', getFetchOptions);
	
	return await response.json();
}

const post = async ({id}, {limit}) => {
	console.log('limit', limit);
	
	const response = await fetch(`http://localhost:5000/posts/${id}`, getFetchOptions);

	const responseData = await response.json();
	
	const comments = getCommentsByPostId(id);

	const post = {...responseData[0], comments};
	
	return post;
}

const comments = async ({postId, limit}) => {
	if (postId) {
		return getCommentsByPostId(postId, limit);
	}
	
	const response = await fetch('http://localhost:5001/comments', getFetchOptions);

	return await response.json();
}

const comment = async ({id}) => {
	const response = await fetch(`http://localhost:5001/comments/${id}`, getFetchOptions);

	if (response.status === 404) return null;
	
	const comment = await response.json();
	
	return comment[0];
}

const createPost = async ({post}) => {
	console.log('post:', post);
	
	const response = await fetch('http://localhost:5000/posts', {...postFetchOptions, body: JSON.stringify(post)});

	return await response.json();
}

const createComment = async ({comment}) => {
	const response = await fetch('http://localhost:5001/comments', {...postFetchOptions, body: JSON.stringify(comment)});

	return await response.json();
}

async function getCommentsByPostId(postId, limit) {
	const response = await fetch('http://localhost:5001/comments', getFetchOptions);

	const responseData = await response.json();

	const filteredComments = responseData.filter(comment => comment.postId === postId);

	if (limit) return filteredComments.filter((comment, index) => index < limit);

	return filteredComments;
}

module.exports = {posts, post, createPost, comments, comment, createComment};
