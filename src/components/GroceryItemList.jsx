import React from 'react';
import GroceryItem from './GroceryItem';
import GroceryListAddItem from './GroceryListAddItem';

class GroceryItemList extends React.Component{
    render(){
        return (
            <div>
                <h1>Grocery Listify</h1>
                {this.props.items.map( (item, index) => 
                    <GroceryItem key={"item" + index} item={item}/>
                )}
                <GroceryListAddItem />
            </div>
        )
    }
}

export default GroceryItemList;
