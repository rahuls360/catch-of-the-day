import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myRef = React.createRef();
  openStore = event => {
    const storeName = this.myRef.current.value;

    this.props.history.push(`/store/${storeName}`);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.openStore}>
          <h2 className="title">Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myRef}
            placeholder="Enter Store Name"
            defaultValue={getFunName()}
            required
          />
          <input type="submit" value="Visit Store" />
        </form>
      </>
    );
  }
}

export default StorePicker;
