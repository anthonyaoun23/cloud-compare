import React from "react";
import { Route, Link } from "react-router-dom";
import looking_learn from "../images/undraw_i_can_fly_7egl (1).svg";
import looking_build from "../images/undraw_To_the_stars_qhyy.svg";
import looking_migrate from "../images/undraw_server_q2pb.svg";
import Migrate from "./Migrate";
import Learn from "./Learn";
import Build from "./Build";
// Navigation for inner app pages
const App = ({ match }) => (
  <div>
    <Route exact path="/app" component={AppPage} />
    <Route exact path={`${match.path}/learn`} component={Learn} />
    <Route path={`${match.path}/build`} component={Build} />
    <Route path={`${match.path}/migrate`} component={Migrate} />
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
        <div class="app_page_li_inner" style={{marginTop: '60px', marginBottom: '60px'}}>
          <img
            src={looking_learn}
            height="7%"
            width="30%"
            style={{ marginRight: "200px" }}
          />
          <div class="app_page_li_inner_inner">
            <h3 style={{ textAlign: "left", padding: 0, margin: 0 }}>
              Looking to <strong>learn</strong>
            </h3>
            <p style={{ fontSize: "0.8em", textAlign: "left" }}>
              Use our search feature to compare different services from
              different providers.
            </p>
            <Link className="button button__accent" to={`${match.url}/learn`}>
              Start Here
            </Link>
          </div>
        </div>
      </li>
      <li style={{ backgroundColor: "#f7f7f7"}} class="app_page_li">
        <div class="app_page_li_inner" style={{marginTop: '80px', marginBottom: '80px'}}>
          <img
            src={looking_build}
            height="7%"
            width="30%"
            style={{ marginRight: "200px" }}
          />
          <div class="app_page_li_inner_inner">
            <h3 style={{ textAlign: "left", padding: 0, margin: 0 }}>
              Looking to <strong>Build</strong>
            </h3>
            <p style={{ fontSize: "0.8em", textAlign: "left" }}>
              Use our search feature to compare different services from
              different providers.
            </p>
            <Link className="button button__accent" to={`${match.url}/build`}>
              Start Here
            </Link>
          </div>
        </div>
      </li>
      <li class="app_page_li">
        <div class="app_page_li_inner" style={{marginTop: '80px', marginBottom: '80px'}}>
          <img
            src={looking_migrate}
            height="7%"
            width="30%"
            style={{ marginRight: "200px" }}
          />
          <div class="app_page_li_inner_inner">
            <h3 style={{ textAlign: "left", padding: 0, margin: 0 }}>
              Looking to <strong>Migrate</strong>
            </h3>
            <p style={{ fontSize: "0.8em", textAlign: "left" }}>
              Take our survey and let us help you make the migration to the
              cloud easy. Match current server assets to IaaS cloud services.
            </p>
            <Link className="button button__accent" to={`${match.url}/migrate`}>
              Start Here
            </Link>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default App;
