import mongoose from 'mongoose';
import GroceryItem from './models/GroceryItem';

mongoose.connect('mongodb://localhost/grocery', () => {
    console.log('connected.');

    mongoose.connection.db.dropDatabase();
    
    const items = [
        { name: "Ice cream" },
        { name: "Waffles" },
        { name: "Candy", purchased: true },
        { name: "Snarks" },
    ];

    items.forEach( item => {
        new GroceryItem(item).save();
    })
});

