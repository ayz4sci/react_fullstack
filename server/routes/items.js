module.exports = (app) => {

    const GroceryItem = require('../models/GroceryItem');

    app.route('/api/items')
    .get( (req, res) =>{
        GroceryItem.find((error, items) => {
            res.send(items);
        })
    })
    .post((req, res) => {
        const item = req.body;
        new GroceryItem(item).save((err, doc) => {
            res.status(200).send();
        })
    })

    app.route('/api/items/:id')
    .delete( (req, res) =>{
        GroceryItem.findByIdAndDelete(req.params.id);
    })
    .patch((req, res) => {
        GroceryItem.findOne({
            _id: req.body._id
        }, (err, item) => {
            for(let key in req.body){
                item[key] = req.body[key];
            }
            item.save();
            res.status(200).send();
        });
    })
}