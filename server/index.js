const app = require('./src/app')

app.listen(process.env.PORT || 8081, () => {
  console.log(`listening on ${process.env.PORT || 8081}`)
})
