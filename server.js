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


    const robotsOptions = {
        root: __dirname + '/static/',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        }
      };
      server.get('/robots.txt', (req, res) => (
        res.status(200).sendFile('robots.txt', robotsOptions)
      ));
      
      const sitemapOptions = {
        root: __dirname + '/static/',
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
        }
      };
      server.get('/sitemap.xml', (req, res) => (
        res.status(200).sendFile('sitemap.xml', sitemapOptions)
      ));
})


