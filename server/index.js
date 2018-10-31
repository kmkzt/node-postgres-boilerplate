const express = require('express');
const app = express();
const port = 8080
// postgreSQL
const pgp = require('pg-promise')(/*options*/)
const db = pgp('postgres://username:password@0.0.0.0:5432/database')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    let content
    db.one('SELECT $1 AS value', 123)
        .then(function (data) {
            content = data
            console.log('DATA:', data.value)
        })
        .catch(function (error) {
            content = error
            console.log('ERROR:', error)
        })
    res.send(content)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))