module.exports = {
	scripts: {
		graphql: "nodemon src/server",
		test: {
			default: "jest",
			watch: "jest --watch"
		}
	}
};