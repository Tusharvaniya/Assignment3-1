import React, { Component } from "react";

class AddItem extends Component {
  state = {
    newItemName: "",
    newItemPrice: "",
  };
  setName = (event) => {
    const newvalue = event.target.value;
    this.setState({ newItemName: newvalue });
  };

  setPrice = (event) => {
    const price = event.target.value;
    this.setState({ newItemPrice: price });
  };

  handleSubmit = (event) => {
    this.props.add(this.state.newItemName, this.state.newItemPrice);
    this.setState({ newItemName: "" });
    this.setState({ newItemPrice: "" });
    event.preventDefault();
  };

  render() {
    return (
      <div className="addItemDiv">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(event) => {
              this.setName(event);
            }}
            id="itemNameBox"
            type="text"
            value={this.state.newItemName}
            placeholder="Enter Item Name"
            required
          />

          <input
            onChange={(event) => {
              this.setPrice(event);
            }}
            id="itemPriceBox"
            type="text"
            value={this.state.newItemPrice}
            placeholder="Enter Item Price"
            required
          />

          <input type="submit" id="Btn" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
