import React from "react";
import PropTypes from "prop-types";

class AddFish extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  addFishToList = event => {
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseInt(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.addFishToList}>
        <input
          type="text"
          name="name"
          placeholder="Fish Name"
          ref={this.nameRef}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          ref={this.priceRef}
          required
        />
        <select name="status" ref={this.statusRef} required>
          <option value="">Select Status</option>
          <option value="available">In Stock</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="Description"
          id=""
          required
        />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="image"
          required
        />
        <input type="submit" value="Add Fish" />
      </form>
    );
  }
}

export default AddFish;
