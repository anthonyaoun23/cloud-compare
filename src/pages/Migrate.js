import React from "react";

import Steppers from "../components/Steppers";

class Migrate extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div class="container" style={{textAlign: 'center'}}>
          <h2 style={{ fontSize: "3em" }}>Looking to <strong>migrate</strong></h2>
        </div>
        <Steppers />
      </div>
    );
  }
}

export default Migrate;
