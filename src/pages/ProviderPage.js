import React from "react";
import { Route, Link } from "react-router-dom";
import looking_learn from '../images/undraw_i_can_fly_7egl (1).svg'
import looking_build from '../images/undraw_To_the_stars_qhyy.svg'
import looking_migrate from '../images/undraw_server_q2pb.svg'
import ProviderTabs from "../components/ProviderTabs"

// Navigation for inner app pages

// Actual content for page
const ProviderPage = ({ match }) => (
    <div class="app_page_container">
      <div class="provider_page_title">
        <h1>Amazon AWS</h1>
      </div>
      <ProviderTabs provider="Amazon AWS"/>
  </div>
);

export default ProviderPage;
