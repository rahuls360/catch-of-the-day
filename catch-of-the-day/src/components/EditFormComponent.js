import React from "react";

class EditFormComponent extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.name}
          required
          placeholder="Fish Name"
        />
        <input
          type="text"
          name="price"
          value={this.props.price}
          required
          placeholder="Price"
        />
        <select name="status" value={this.props.status} required>
          <option value="">Select Status</option>
          <option value="available">In Stock</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          value={this.props.desc}
          required
          placeholder="Description"
        />
        <input
          type="text"
          name="image"
          value={this.props.image}
          required
          placeholder="Image"
        />
      </div>
    );
  }
}

export default EditFormComponent;
