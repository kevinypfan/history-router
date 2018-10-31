const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static('dist'));

app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => {
    console.log(`🚀 Server ready at localhost:3000`);
})
