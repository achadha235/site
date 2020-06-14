const express = require('express')

const Router = express.Router({ caseSensitive: false })

Router.all('/*', (req, res, next) => {
  next()
})

module.exports = Router
