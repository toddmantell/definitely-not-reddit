const interfaces = require('../interfaces/content');
const types = require('../types');
const queries = interfaces + types + `
type Query {
	post(id: Int, title: String, author: String): Post
	posts: [Post]
	comment(id: Int!): Comment
	comments: [Comment]
}
`;

module.exports = queries;