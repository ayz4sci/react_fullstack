module.exports = (app) => {

    const GroceryItem = require('../models/GroceryItem');

    app.route('/api/items')
    .get( (req, res) =>{
        GroceryItem.find((error, items) => {
            res.send(items );
        })
    })
    .post((req, res) => {
        const item = req.body;
        new GroceryItem(item).save((err, doc) => {
            res.status(300).send();
        })
    })
}