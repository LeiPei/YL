const { User } = require('../../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(201).send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      res.send({
        user: user.toJSON()
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, failed to login'
      })
    }
  },
  async findAll (req, res) {
    try {
      console.log('what is going on?')
      var users = await User.findAll({ attributes: ['email', 'firstName', 'lastName'] })
      console.log('wtfhaha')
      var jsonObj = { usersabc: users }
      console.log(jsonObj)
      res.send({
        users: jsonObj.toJSON()
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, failed to retrive all users data'
      })
    }
  }
}
