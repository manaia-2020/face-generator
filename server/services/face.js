const fs = require('fs')

const randomFile = require('../helpers/random')

function getPart(part) {
  return new Promise((resolve, reject) => {
    fs.readdir(`../../public/images/${part}`, 'utf8', (err, files) => {
      if (err) reject(err)
      resolve(randomFile(files))
    })
  })
}