require('isomorphic-fetch');

const postFetchOtions = {method: 'POST', mode: 'cors', 
	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}};

const createPost = async post => {
	const response = await fetch('http://localhost:5000/posts', {...postFetchOtions, body: JSON.stringify(post)});

	const responseData = await response.json();

	return responseData;
}

const createComment = async comment => {
	const response = await fetch('http://localhost:5001/comments', {...postFetchOtions, body: Json.stringify(comment)});

	const responseData = await response.json();

	return responseData;
}

module.exports = {createPost};
