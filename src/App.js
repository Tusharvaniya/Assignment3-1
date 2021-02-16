import "./App.css";
import React, { Component } from "react";
import ItemList from "./Item/itemList";
import AddItem from "./Item/addItem";

class App extends Component {
  state = {
    items: [
      {
        id: parseInt(Date.now() * Math.random()),
        name: "Pendrive",
        qty: 1,
        price: 1000,
      },
      {
        id: parseInt(Date.now() * Math.random()),
        name: "Mouse",
        qty: 1,
        price: 2000,
      },
    ],
  };

  deleteItem = (item_id) => {
    let obj = [...this.state.items];
    let item = obj.find((item) => item.id === item_id);
    let item_index = obj.indexOf(item);

    obj.splice(item_index, 1);
    this.setState({ items: obj });
  };

  addItem = (name, price) => {
    let obj = [...this.state.items];
    const newItem = {
      id: parseInt(Date.now() * Math.random()),
      name,
      price,
    };

    obj.push(newItem);
    this.setState({ items: obj });
  };

  updateItem = (qty, item_id) => {
    let obj = [...this.state.items];
    let item = obj.find((item) => item.id === item_id);
    let item_index = obj.indexOf(item);
    item.qty = parseInt(qty);
    obj[item_index] = item;

    this.setState({ items: obj });
  };

  render() {
    return (
      <div className="App">
        <AddItem
          newitemname=""
          newitemprice=""
          add={(name, price) => {
            this.addItem(name, price);
          }}
        />

        <div className="App-header">
          <p>Item List</p>
        </div>
        <div>
          {this.state.items.map((item) => {
            return (
              <ItemList
                itemName={item.name}
                itemId={item.id}
                itemPrice={item.price}
                itemQty={item.qty}
                key={item.id}
                deleteclicked={(event) => {
                  this.deleteItem(item.id);
                }}
                updateclicked={(event) => {
                  this.updateItem(event, item.id);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
