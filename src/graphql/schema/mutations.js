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
		createPost(post: PostInput) : Post // verify that if you try to send an incomplete PostInput, it fails
		createComment(comment: CommentInput) : Comment
	}
`;