import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/`
  })
}