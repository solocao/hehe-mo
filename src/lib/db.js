import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
var CryptoJS = require('crypto-js')

const adapter = new LocalStorage('db', {
  serialize: (data) => CryptoJS.AES.encrypt(JSON.stringify(data), 'key'),
  deserialize: (data) => JSON.parse(CryptoJS.AES.decrypt(data.toString(), 'key').toString(CryptoJS.enc.Utf8))
})

export const db = low(adapter)
