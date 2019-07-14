import React from "react";
import { Route, Link } from "react-router-dom";
import looking_learn from '../images/undraw_i_can_fly_7egl (1).svg'
import looking_build from '../images/undraw_To_the_stars_qhyy.svg'
import looking_migrate from '../images/undraw_server_q2pb.svg'
import Migrate from './Migrate';

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
      component={Migrate}
    />
  </div>
);

// Actual content for page
const AppPage = ({ match }) => (
    <div class="app_page_container">
      <div class="app_page_title">
        <h1>What are you looking to do?</h1>
      </div>
      <ul class="app_page_ul">
        <li class="app_page_li">
          <div class="app_page_li_inner">
          <img src={looking_learn} height="7%" width="30%" style={{ marginRight: "200px" }}/>
            <div class="app_page_li_inner_inner">
              <h3 style={{textAlign:"left", padding: 0, margin: 0}}>Looking to learn</h3>
              <p style={{fontSize: "0.8em", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className= "button button__accent" to={`${match.url}/learn`}>Start Here</Link>
            </div>
          </div>
        </li>
        <li style={{backgroundColor: "#f7f7f7"}}class="app_page_li">
          <div class="app_page_li_inner">
          <img src={looking_build} height="7%" width="30%" style={{ marginRight: "200px" }}/>
            <div class="app_page_li_inner_inner">
              <h3 style={{textAlign:"left", padding: 0, margin: 0}}>Looking to Build</h3>
              <p style={{fontSize: "0.8em", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className= "button button__accent" to={`${match.url}/build`}>Start Here</Link>
            </div>
          </div>
          
        </li>
        <li class="app_page_li">
          <div class="app_page_li_inner">
          <img src={looking_migrate} height="7%" width="30%" style={{ marginRight: "200px" }}/>
            <div class="app_page_li_inner_inner">
              <h3 style={{textAlign:"left", padding: 0, margin: 0}}>Looking to Migrate</h3>
              <p style={{fontSize: "0.8em", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className= "button button__accent" to={`${match.url}/migrate`}>Start Here</Link>
            </div>
          </div>
        </li>
      </ul>
  </div>
);

export default App;
