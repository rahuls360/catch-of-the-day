import React from "react";
import PropTypes from "prop-types";
import AddFish from "./AddFish";
import EditFormComponent from "./EditFormComponent";
import Login from './Login';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  authenticate = (provider) => {
    alert(provider);
  }

  render() {
    return <Login authenticate={this.authenticate}></Login>
    return (
      <div className="inventory">
        <p>Inventory!</p>
        {Object.keys(this.props.fishes).map(key => (
          <EditFormComponent
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFish addFish={this.props.addFish} />

        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
