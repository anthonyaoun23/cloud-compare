import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import SteppersBuild from "../components/SteppersBuild";

const Build = () => (
    <div>
        <Route exact path="/app/build" component={BuildPage} />
  </div>
)

const gotoProvider = (path) => {

}


class BuildPage extends React.Component {
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
