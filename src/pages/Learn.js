import React from "react";

import SteppersKhang from "../components/SteppersKhang";

//learn page

class Learn extends React.Component {
  state = {};
//renders the page
  render() {
    return (
      <div>
        <div class="container" style={{textAlign: 'center'}}>
          <h2 style={{ fontSize: "3em" }}>Looking to <strong>learn</strong></h2>
        </div>
        <SteppersKhang />
      </div>
    );
  }
}

export default Learn;
