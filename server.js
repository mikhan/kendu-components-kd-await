express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.static('src'))

app.get('/', (request, response) => {
  response.sendFile('./public/index.html')
})

app.listen(8887, () => {
  console.log('Your app is listening')
})
