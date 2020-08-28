const express = require('express')

const { getFace, getUrl } = require('../services/face')

const router = express.Router()

router.get('/face', (request, response) => {
  getFace()
    .then(face => {
      getUrl(face, () => {
        response.json(face)
      })
    })
    .catch(console.log)
})

module.exports = router