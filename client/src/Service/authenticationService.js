import api from '@/service/api'


export default {
  register: (credentials) => api().post('register', credentials),
  login: (credentials) => api().post('login', credentials)
}