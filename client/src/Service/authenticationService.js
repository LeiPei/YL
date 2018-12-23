import api from '@/service/api'

export default {
  register: (credentials) => api().post('register', credentials)
}