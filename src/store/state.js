import { db } from 'lib/db'

const state = {
  login: db.get('login').value(),
  user: db.get('user').value(),
  demo: '测试'
}
export default state
