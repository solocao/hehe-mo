import axios from 'axios'
import qs from 'qs'
import store from '../store'

axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://0.0.0.0:8082'

// axios.defaults.withCredentials = true

export const get = (params) => {
  const { url, payload, auth } = params
  let config = {}
  // 负载不为空
  if (payload !== null || payload !== undefined) {
    config = Object.assign({}, config, { params: payload })
  }
  // 需要验证
  if (auth) {
    config = Object.assign({}, config, {
      headers: {
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjM4OGRkMjgxYTFhNTVjMDU4OGM3OGYiLCJleHAiOjE1MzMwMjgwODAsImlhdCI6MTUzMDQzNjA4MH0.1NYtGIOHpJGV0Ix36ad9gqxPIYB745zA_YX03a1wJDY' || store.state.user.auth
      }
    })
  }
  return axios.get(url, config).then(x => x.data)
}

export const post = (params) => {
  const { url, payload, auth } = params
  let authHeader = {}
  // 需要验证
  if (auth) {
    authHeader = {
      headers: {
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjM4OGRkMjgxYTFhNTVjMDU4OGM3OGYiLCJleHAiOjE1MzMwMjgwODAsImlhdCI6MTUzMDQzNjA4MH0.1NYtGIOHpJGV0Ix36ad9gqxPIYB745zA_YX03a1wJDY' || store.state.user.user.auth
      }
    }
  }
  return axios.post(url, qs.stringify(payload), authHeader).then(x => x.data)
}

export const upload = (params) => {
  const { url, payload } = params
  return axios.post(url, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(x => x.data)
}
