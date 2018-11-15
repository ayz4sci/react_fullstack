import React from 'react';
import * as actions from '../actions/ActionCreators';

class GroceryItem extends React.Component{

    delete = (e) => {
        e.preventDefault();
        actions.deleteItem(this.props.item);
    }

    togglePurchased = (e) => {
        e.preventDefault();

        const item = this.props.item;

        if(item.purchased) {
            actions.unbuy(item);
        } else {
            actions.buy(item)
        }
    }
    
    render(){
        return (
            <div className="grocery-item row">
                <div className="twelve columns">
                    <h5 className={this.props.item.purchased ? "strikethrough six columns" : "six columns"}>{this.props.item.name}</h5>
                    <form className="three columns" onSubmit={this.togglePurchased}>
                        <button className={this.props.item.purchased ? "" : "button-primary"}>
                            {this.props.item.purchased ? "Unbuy" : "Buy"}
                        </button>
                    </form>
                    <form className="three columns" onSubmit={this.delete}>
                        <button>&times;</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default GroceryItem;
