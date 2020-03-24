import axios from 'axios'

const api = 'http://localhost:8020/'
const token = storage.token.pegar()

const http = axios.create({
  baseURL: api,
  headers: {
    'x-access-token': token,
  },
})

export default function () {
  return http
}
