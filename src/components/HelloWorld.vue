<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
var CryptoJS = require('crypto-js')

const adapter = new LocalStorage('db', {
  serialize: (data) => CryptoJS.AES.encrypt(JSON.stringify(data), 'key'),
  deserialize: (data) => JSON.parse(CryptoJS.AES.decrypt(data.toString(), 'key').toString(CryptoJS.enc.Utf8))
})
const db = low(adapter)

export default {
  components: {
    Group,
    Cell
  },
  mounted () {
    db.defaults({ posts: [] })
      .write()

    // Data is automatically saved to localStorage
    db.get('posts')
      .push({ title: 'lowdb' })
      .write()

    console.log(db.getState())

    console.log(db.has('posts').value())

    console.log(db.get('posts').take(5).value())
  }
}
</script>
