import React from "react";
import { Route, Link } from "react-router-dom";
// import Migrate from './Migrate';

// Navigation for inner app pages
const App = ({ match }) => (
  <div>
    <Route exact path="/app" component={AppPage} />
    <Route
      exact
      path={`${match.path}/learn`}
      render={() => <div> Select a service you'd like to compare </div>}
    />
    <Route
      path={`${match.path}/build`}
      component={() => <div> Select from our templates </div>}
    />
    <Route
      path={`${match.path}/migrate`}
      component={() => <div> Take quiz </div>}
    />
  </div>
);

// Actual content for page
const learn_img = require("./undraw_hello_aeia.svg")
const AppPage = ({ match }) => (
    <div class="app_page_container">
      <div class="app_page_title">
        <h1>What are you looking to do?</h1>
      </div>
      <ul class="app_page_ul">
        <li class="app_page_li">
          <img src={learn_img} height="10%" width="40%" style={{marginBottom: "100px" }}/>
          <Link to={`${match.url}/learn`}>Looking to learn</Link>
        </li>
        <li class="app_page_li">
          <Link to={`${match.url}/build`}>Looking to build</Link>
        </li>
        <li class="app_page_li">
          <Link to={`${match.url}/migrate`}>Looking to migrate</Link>
        </li>
      </ul>
  </div>
);

export default App;
