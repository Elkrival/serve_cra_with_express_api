const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const data = require('./MOCK_DATA.json')

app.get('/api/data', async (req, res) => {
  return res.json(data)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'my-app', 'build')))
  app.get('/*', async (req, res) => {
    return res.sendFile(
      path.join(__dirname, '..', 'my-app', 'build', 'index.html')
    )
  })
}

app.listen(9000)
