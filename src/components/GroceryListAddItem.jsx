import React from 'react';
import * as action from '../actions/ActionCreators';

class GroceryListAddItem extends React.Component{
    state = { input: "" };

    handleInputName = (event) =>{
        this.setState({ input: event.target.value});
    }

    addItem = (event) =>{
        event.preventDefault();
        console.log("Adding item", this.state.input);
        action.addItem({name: this.state.input})
        this.setState({input: ""})
    }

    render(){
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} type='text' onChange={this.handleInputName}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default GroceryListAddItem;
