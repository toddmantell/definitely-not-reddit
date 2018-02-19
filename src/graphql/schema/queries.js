const interfaces = require('../interfaces');
const types = require('../types');
const queries = interfaces + types + `
type Query {
	post(id: Int, title: String, author: String): Post
	posts: [Post]
	comment(id: Int, author: String): Comment
	comments: [Comment]
}
`;

module.exports = queries;