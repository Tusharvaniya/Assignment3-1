import { Component } from "react";
import "../App.css";

class itemList extends Component {
  state = { id: this.props.itemId, qty: this.props.itemQty };

  setQty = (event) => {
    const qty = event.target.value;
    this.setState({ qty });
    this.props.updateclicked(qty);
  };
  render() {
    return (
      <div className="List">
        <p id="item-name">{this.props.itemName}</p>
        <p id="item-price">{this.props.itemPrice}$</p>
        <button
          id="Btn"
          key={this.props.itemId}
          onClick={this.props.deleteclicked}
        >
          Delete
        </button>
        Qty :
        <input
          onChange={this.setQty}
          placeholder="Qty"
          type="text"
          id="qtyBox"
        ></input>
        <p id="item-total">
          Item Total:{" "}
          {this.props.itemPrice *
            (isNaN(parseInt(this.state.qty)) ? 1 : this.state.qty)}
          $
        </p>
      </div>
    );
  }
}

export default itemList;
