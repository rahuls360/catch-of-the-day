import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {orderIds}
        <div className="total">{/* Total: <strong>{total}</strong> */}</div>
      </div>
    );
  }
}

export default Order;
