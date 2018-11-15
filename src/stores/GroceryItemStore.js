import * as dispatcher from '../dispatcher';
import * as actions from '../actions/ActionTypes';

const GroceryItemStore = () => {
    const items = [
        { name: "Ice cream" },
        { name: "Waffles" },
        { name: "Candy", purchased: true },
        { name: "Snarks" },
    ];
    
    const listeners = [];

    const getItems = () => items

    const onMount = (listener) => listeners.push(listener);

    const onDismount = (listener) => listeners.pop(listener);


    const triggerListeners = () => {
        listeners.forEach( listener => {
            listener(items);
        });
    }

    const addGroceryItem = (item) => {
        items.push(item);
        triggerListeners();
    }

    const deleteGroceryItem = (item) => {
        items.pop(item);
        triggerListeners();
    }

    const setGroceryItemBought = (item, isBought) => {
        items.forEach(_item => {
            if(_item.name === item.name){
                _item.purchased = isBought
            }
        })
        triggerListeners();
    }

    dispatcher.register( event => {
        const split = event.type.split(':');
        if( split[0] === actions.GROCERY_ITEM) {
            switch( split[1]){
                case actions.ADD:
                    addGroceryItem(event.payload);
                    break;
                case actions.DELETE:
                    deleteGroceryItem(event.payload);
                    break;
                case actions.BUY:
                    setGroceryItemBought(event.payload, true);
                    break;
                case actions.UNBUY:
                    setGroceryItemBought(event.payload, false);
                    break;

                default:
                break;
            }
        }
    });

    return {
        getItems: getItems,
        onMount: onMount,
        onDismount: onDismount
    }
}

export default GroceryItemStore();

