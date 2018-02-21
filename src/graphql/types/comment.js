module.exports = `
type Comment implements Content {
	# The Comment Id
	id: Int!
	# The id of the post that this comment is attached to.
	postId: Int
	body: String!
	author: String!
	votes: Int
}
`;