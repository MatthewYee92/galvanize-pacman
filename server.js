const express = require('express')
const path = require('path')
const app = express()

// const morgan = require('morgan')
// app.use(morgan('dev'))

app.use(express.static(path.resolve(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public','index.html'))
// })

app.listen(3000, () => {
  console.log('- listening on port 3000 -');
})
