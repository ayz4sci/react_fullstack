import express from 'express';
import parser from 'body-parser';
import path from 'path';
import fs from "fs";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

require('./database');

const app = new express();
const port = 7777;

app.get('/', (req, res) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '../public/index.html');
    // const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(<App />);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
})
.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items')(app);
