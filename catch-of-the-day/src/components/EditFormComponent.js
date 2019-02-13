import React from "react";
import PropTypes from "prop-types";

class EditFormComponent extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string
    }),
    index: PropTypes.string,
    deleteFish: PropTypes.func
  };

  handleChange = event => {
    const currentFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, currentFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          required
          placeholder="Fish Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          required
          placeholder="Price"
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          required
          onChange={this.handleChange}
        >
          <option value="">Select Status</option>
          <option value="available">In Stock</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          required
          placeholder="Description"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          required
          placeholder="Image"
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFormComponent;
