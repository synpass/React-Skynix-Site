const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
    .add('about-skynix')
    .add('resources', '/resources')
    .add('article', '/resources/:slug')
    .add('process')
    .add ('privacy-policy')
    .add('technologies')
    .add('terms-conditions')
    .add('ecommerce')
