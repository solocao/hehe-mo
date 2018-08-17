import { db } from 'lib/db'
const mutations = {
  set (state, params) {
    const keys = Object.keys(params)
    keys.forEach(x => {
      const val = params[x]
      db.set(x, val).write()
      state[x] = val
    })
  }
}
export default mutations
