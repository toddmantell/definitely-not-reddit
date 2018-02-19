require('isomorphic-fetch');

const getFetchOptions = {method: 'GET', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const postFetchOptions = {method: 'POST', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const posts = async () => {
	const response = await fetch('http://localhost:5000/posts', getFetchOptions);
	
	return response.json();
}

const post = async ({id}) => {
	const response = await fetch('http://localhost:5000/posts', {...getFetchOptions, body: id});

	const post = await response.json();

	return post[0];
}

const comments = async () => {
	const response = await fetch('http://localhost:5001/comments', getFetchOptions);

	return response.json();
}

const comment = async ({id}) => {
	const response = await fetch(`http://localhost:5001/comments/${id}`, getFetchOptions);

	const comment = await response.json();

	return comment[0];
}

const createPost = async post => {
	console.log('post:', post);
	
	const response = await fetch('http://localhost:5000/posts', {...postFetchOptions, body: JSON.stringify(post)});

	return response.json();
}

const createComment = async comment => {
	const response = await fetch('http://localhost:5001/comments', {...postFetchOptions, body: JSON.stringify(comment)});

	return response.json();
}

module.exports = {posts, post, createPost, comments, comment, createComment};
