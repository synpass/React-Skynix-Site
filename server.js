
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']

        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
            const path = join(__dirname, 'static', parsedUrl.pathname)
            app.serveStatic(req, res, path)
        } else if (parsedUrl.pathname.includes('/resources/')) {
            let slug = parsedUrl.pathname.substring(parsedUrl.pathname.lastIndexOf("/") + 1),
                route = slug ? "/article" : "/resources";

            app.render(req, res, route, slug ? {slug: slug}: {page:1})

        } else if(parsedUrl.pathname.includes('/portfolio/')){
            let project = parsedUrl.pathname.substring(parsedUrl.pathname.lastIndexOf("/") + 1);

            app.render(req, res, "/portfolio-custom", {project: project})
        } else {
            handle(req, res)
        }
    }).listen(port, err => {
        if (err) throw err
    })
})