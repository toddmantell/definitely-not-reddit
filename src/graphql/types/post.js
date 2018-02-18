const post = `
	type Post implements Content {
		id: Int!
<<<<<<< HEAD
		title: String
		body: String!
		author: String!
		votes: Int!

=======
		title: String!
		body: String!
		author: String!
		votes: Int!
		comments: [Comment]!
>>>>>>> cde38ee72724e73160bfabd00a2d3101df92a055
	}
`;

module.exports = post;