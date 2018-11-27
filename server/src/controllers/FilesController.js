const fs = require('fs')
const path = require('path')
module.exports = {
  readFiles (req, res) {
    var musicName = req.params.name
    var file = path.join(__dirname, '../assests', 'music', `${musicName}`)

    fs.exists(file, function (exists) { // eslint-disable-line
      if (exists) {
        var rstream = fs.createReadStream(file)
        rstream.pipe(res)
      } else {
        res.send('Its a 404')
        res.end()
      }
    })
  },
  readPicture (req, res) {
    var picName = req.params.name
    var filepath = path.join(__dirname, '../assests', 'musicPics', `${picName}`)

    res.sendFile(filepath)
  }
}
