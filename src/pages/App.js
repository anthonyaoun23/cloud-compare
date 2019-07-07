import React from "react";
import { Route, Link } from "react-router-dom";

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
      component={() => <div> Fill out this survey to migrate </div>}
    />
  </div>
);

// Actual content for page
const AppPage = ({ match }) => (
  <div>
    App Page
    <ul>
      <li>
        <Link to={`${match.url}/learn`}>Looking to learn</Link>
      </li>
      <li>
        <Link to={`${match.url}/build`}>Looking to build</Link>
      </li>
      <li>
        <Link to={`${match.url}/migrate`}>Looking to migrate</Link>
      </li>
    </ul>
  </div>
);

export default App;
