const FilesController = require('./controllers/FilesController')
module.exports = (app) => {
  // use express middleware
  app.get('/music/:name', FilesController.readFiles)
  app.get('/musicPic/:name', FilesController.readPicture)
}
