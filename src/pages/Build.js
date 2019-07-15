import React from "react";

import SteppersBuild from "../components/SteppersBuild";

class Build extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div class="container" style={{textAlign: 'center'}}>
          <h2 style={{ fontSize: "3em" }}>Looking to <strong>build</strong></h2>
        </div>
        <SteppersBuild />
      </div>
    );
  }
}

export default Build;
