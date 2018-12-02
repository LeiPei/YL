const FilesController = require('./controllers/FilesController')
module.exports = (app) => {
  // use express middleware
  app.get('/music/:name', FilesController.readFiles)
  app.get('/musicPic/:name', FilesController.readPicture)
  app.get('/test', (req, res) => {
    return res.json({
      message: 'Hello 吴怡青宝宝!'
    })
  })
}
