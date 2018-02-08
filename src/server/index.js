const server = require('./app');
const { port } = require('./config');

server.listen(port, () => {
	console.log(`Listening on port: ${port}`)
});

module.exports = server;