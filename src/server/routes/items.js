
module.exports = (app) => {

    const items = [
        { name: "Ice cream" },
        { name: "Waffles" },
        { name: "Candy", purchased: true },
        { name: "Snarks" },
    ];

    app.route('/api/items')
    .get( (req, res) =>{
        res.send(items);
    })
}