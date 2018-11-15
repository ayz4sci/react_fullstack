import * as actions from './ActionTypes'
import * as dispatcher from '../dispatcher';

export const addItem = (item) => {
    dispatcher.dispatch({
        payload: item,
        type: actions.GROCERY_ITEM_ADD
    })
};

export const deleteItem = (item) => {
    dispatcher.dispatch({
        payload: item,
        type: actions.GROCERY_ITEM_DELETE
    })
};

export const buy = (item) => {
    dispatcher.dispatch({
        payload: item,
        type: actions.GROCERY_ITEM_BUY
    })
};

export const unbuy = (item) => {
    dispatcher.dispatch({
        payload: item,
        type: actions.GROCERY_ITEM_UNBUY
    })
};