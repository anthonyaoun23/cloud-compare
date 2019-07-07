import React, { Component } from "react";
import { Link } from "react-router-dom";


const Index = () => (
  <div>
    <div class="page__header">
      <div class="hero__overlay hero__overlay--gradient" />
      <div class="hero__mask" />
      <div class="page__header__inner">
        <div class="container" style={{marginTop: -24, width: '100%', paddingBottom: '20px'}}>
          <div class="page__header__content" style={{width: '100%'}}>
            <div class="page__header__content__inner" id="navConverter" style={{width: '100%', maxWidth: '100%'}}>
              <h1 class="page__header__title" style={{fontSize: '3em', marginBottom: '-2px'}}>Cloud platforms/services comparisons made easy</h1>
              <p class="" style={{fontSize: '1.25em', marginBottom: '40px', width: '100%'}}>
                Match and compare cloud hosting services from leading providers in seconds
              </p>
              <Link className="button button__accent" to="/app">Try now for free</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
