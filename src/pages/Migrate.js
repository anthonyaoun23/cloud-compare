import React from "react";

import CheckboxesGroup from '../components/SelectorsAnthony'
import SteppersAnthony from "../components/SteppersAnthony";

class Migrate extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div class="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "3em" }}>
            Looking to <strong>migrate</strong>
          </h2>
        </div>
        <SteppersAnthony />
      </div>
    );
  }
}

export default Migrate;
