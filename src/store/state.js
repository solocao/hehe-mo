import { db } from 'lib/db'

const state = {
  login: db.get('login').value(),
  user: db.get('user').value(),
  // 用户喜欢的
  loves: [],
  demo: '测试',
  // 购物车
  cart: [],
  // 预购买
  preOrder: null
}
export default state
