const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// // With express
const express = require('express')
app.prepare().then(() => {

    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    express().use(handler).listen(3000)

})

app.use(express.static('public'));



