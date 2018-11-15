const express = require('express');
const parser = require('body-parser');

const app = new express();
const port = process.env.PORT || 7777;

app.get('/', (req, res) => {
    res.render('./../app/index.html', {})
})
.use(express.static(__dirname +'./../app/'))
.listen(port, () => console.log(`Listening on port ${port}`))

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items')(app);
