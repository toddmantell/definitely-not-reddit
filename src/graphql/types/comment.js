const comment = `
type Comment implements Content {
	id: Int!
	title: String!
	body: String!
	author: String!
	votes: Int!
}
`;

// What about a union type?
// Inline fragments help you query interfaces or unions polymorphically

//__typename also known as meta fields, help you get more information

module.exports = comment;