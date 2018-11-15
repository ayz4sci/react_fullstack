const express = require('express');
const parser = require('body-parser');

require('./database');

const app = new express();
const port = process.env.PORT || 7777;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root : __dirname + './../public'})
})
.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items')(app);
