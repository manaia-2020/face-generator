const express = require('express')

const face = require('./server/routes/face')

const port = process.env.PORT || 3000

const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use('/', face)

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

module.exports = server