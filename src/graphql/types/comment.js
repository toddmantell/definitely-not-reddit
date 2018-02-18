const comment = `
type Comment implements Content {
	id: Int!
<<<<<<< HEAD
	title: String
=======
	title: String!
>>>>>>> cde38ee72724e73160bfabd00a2d3101df92a055
	body: String!
	author: String!
	votes: Int!
}
`;

// What about a union type?
// Inline fragments help you query interfaces or unions polymorphically

//__typename also known as meta fields, help you get more information

module.exports = comment;