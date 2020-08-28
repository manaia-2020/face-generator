const express = require('express')

const getFace = require('../services/face')

const router = express.Router()

router.get('/face', (request, response) => {
  getFace()
    .then(face => response.json(face))
    .catch(console.log)
})

module.exports = router