
const crypto = require('crypto')
export const md5 = (word) => {
  return crypto.createHash('md5').update(word).digest('hex')
}
