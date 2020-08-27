const fs = require('fs')

const randomFile = require('../helpers/random')

const parts = ['ForeHeads', 'Eyes', 'Noses', 'Mouths', 'Chins']

function getPart(part) {
  return new Promise((resolve, reject) => {
    fs.readdir(`../../public/images/${part}`, 'utf8', (err, files) => {
      if (err) reject(err)
      resolve(randomFile(files))
    })
  })
}

async function getFace() {
  const face = {}

  for(let i = 0; i < parts.length; i++) {
    const part = await getPart(parts[i])
    face[parts[i]] = part
  }

  return face
}

module.exports = getFace