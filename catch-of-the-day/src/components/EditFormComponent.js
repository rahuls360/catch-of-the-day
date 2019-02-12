import React from "react";

class EditFormComponent extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    console.log("DATA CHANGING!");
  }
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
        <select name="status" value={this.props.fish.status} required
        onChange={this.handleChange}>
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
      </div>
    );
  }
}

export default EditFormComponent;
