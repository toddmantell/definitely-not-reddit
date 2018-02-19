const post = `
	type Post implements Content {
		id: Int!
		title: String
		body: String!
		author: String!
		votes: Int
		comments(postId: Int!): [Comment]
	}
`;

module.exports = post;