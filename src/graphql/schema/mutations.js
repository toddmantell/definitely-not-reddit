const mutation = `
	input PostInput {
		title: String!
		body: String!
		author: String!
	}

	input CommentInput {
		body: String
		author: String
	}

	type Mutation {
		createPost(post: PostInput) : Post
<<<<<<< HEAD
=======
		createComment(comment: CommentInput) : Comment
>>>>>>> cde38ee72724e73160bfabd00a2d3101df92a055
	}
`;

module.exports = mutation;