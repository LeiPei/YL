const FilesController = require('./controllers/FilesController')
const AuthenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
  // use express middleware
  app.get('/music/:name', FilesController.readFiles)
  app.get('/musicPic/:name', FilesController.readPicture)
  // authentication
  app.post('/register', AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get('/allUsers', AuthenticationController.findAll)
  app.delete('/allUsers', AuthenticationController.deleteAll)
  app.get('/test', (req, res) => {
    return res.json({
      message: 'Hello 吴怡青宝宝!'
    })
  })
}
