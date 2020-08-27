const randomFile = files => {
  const index = Math.floor(Math.random() * files.length)
  const file = files[index]
  return file
}

module.exports = randomFile