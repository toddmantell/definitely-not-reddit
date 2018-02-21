module.exports = `
	type Post implements Content {
		id: Int!
		title: String
		body: String!
		author: String!
		votes: Int
		comments(limit: Int): [Comment]
	}
`;