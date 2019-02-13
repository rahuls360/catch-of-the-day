import React from "react";
import firebase from 'firebase';
import PropTypes from "prop-types";
import AddFish from "./AddFish";
import EditFormComponent from "./EditFormComponent";
import Login from './Login';
import { firebaseApp } from '../base';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  authHandler = async (authData) => {
    console.log(authData);
  }

  authenticate = (provider) => {
    // const authProvider = new firebase.auth.GithubAuthProvider();
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
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
