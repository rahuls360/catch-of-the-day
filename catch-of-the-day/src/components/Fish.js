import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    addToCart: PropTypes.func,
    index: PropTypes.string,
    fishInfo: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string
    })
  };

  handleClick = () => {
    this.props.addToCart(this.props.index);
  };
  render() {
    const { name, image, price, status, desc } = this.props.fishInfo;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
