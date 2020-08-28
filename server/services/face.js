const fs = require('fs')
const path = require('path');
const mergeImg = require('merge-img')
const randomFile = require('../helpers/random')

const parts = ['ForeHeads', 'Eyes', 'Noses', 'Mouths']
const directory = path.dirname(require.main.filename)

function getPart(part) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${directory}/public/images/${part}`, 'utf8', (err, files) => {
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

function getUrl(face, callback) {
  const images = Object.entries(face).map(arr => {
    return `${directory}/public/images/${arr[0]}/${arr[1]}`
  })
  const file = path.join(directory, 'public', 'images', 'out.png')
  mergeImg(images, {direction: true, align: 'center'})
    .then(img => {
      img.resize(250, 250)
      img.write(file, () => callback())
  })
}

module.exports = {getFace, getUrl}