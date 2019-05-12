const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>Hello from App Engine!</h1>
    `)
})

app.get('/user/:name', (req, res)=> {
    res.send('<h1>Hello ' + req.params.name);
});

module.exports = app
