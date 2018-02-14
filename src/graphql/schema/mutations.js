const mutation = `
	input PostInput {
		title: String
		body: String
		author: String
	}

	type Mutation {
		createPost(post: PostInput) : Post
	}
`;

module.exports = mutation;