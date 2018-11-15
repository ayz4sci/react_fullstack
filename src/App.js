import React, { Component } from 'react';
import GroceryItemList from './components/GroceryItemList';
import GroceryItemStore from './stores/GroceryItemStore';

class App extends Component {
  state = {
    initial: GroceryItemStore.getItems()
  }

  changeListener = (items) => {
    this.setState({initial: items})
  }

  componentDidMount = () => {
    GroceryItemStore.onMount( this.changeListener);
  }

  componentWillUnmount = () => {
    GroceryItemStore.onDismount(this.changeListener)
  }

  render() {
    return (
      <GroceryItemList items={this.state.initial}/>
    );
  }
}

export default App;
