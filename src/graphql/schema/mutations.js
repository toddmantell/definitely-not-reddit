const mutation = `
	input PostInput {
		title: String!
		body: String!
		author: String!
	}

	input CommentInput {
		body: String
		author: String
		postId: Int
	}

	type Mutation {
		createPost(post: PostInput) : Post
		createComment(comment: CommentInput) : Comment
	}
`;

module.exports = mutation;