import React from "react";
import AddFish from "./AddFish";
import EditFormComponent from "./EditFormComponent";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <p>Inventory!</p>
        <AddFish addFish={this.props.addFish} />
        {Object.keys(this.props.fishes).map(key => (
          <EditFormComponent
            key={key}
            index={key}
            fish={this.props.fishes[key]}
          />
        ))}
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
