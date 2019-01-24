import React from "react";
import AddFish from "./AddFish";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <p>Inventory!</p>
        <AddFish addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
