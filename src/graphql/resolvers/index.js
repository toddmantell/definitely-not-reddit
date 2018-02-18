require('isomorphic-fetch');

const getFetchOptions = {method: 'GET', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const postFetchOptions = {method: 'POST', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const posts = async () => {
	const response = await fetch('http://localhost:5000/posts', getFetchOptions);
	
	return response.json();
}

const post = async id => {
	const response = await fetch('http://localhost:5000/posts', {...getFetchOptions, body: id});

	return await response.json();
}

const comments = async () => {}

const comment = async id => {//not working, need to get it to return a single comment
	const response = await fetch('http://localhost:5001/comments', {getFetchOptions, body: JSON.stringify(id)});

	return await response.json();
}

const createPost = async post => {
	const response = await fetch('http://localhost:5000/posts', {...postFetchOptions, body: JSON.stringify(post)});

	return await response.json();
}

const createComment = async comment => {	
	const response = await fetch('http://localhost:5001/comments', {...postFetchOptions, body: JSON.stringify(comment)});

	const responseData = await response.json();

	return responseData;
}

module.exports = {posts, post, createPost, comment, createComment};
