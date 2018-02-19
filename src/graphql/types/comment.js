const comment = `
type Comment implements Content {
	id: Int!
	# The id of the post that this comment is attached to.
	postId: Int
	body: String!
	author: String!
	votes: Int
}
`;

module.exports = comment;