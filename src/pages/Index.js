import React, { Component } from "react";
import { Link } from "react-router-dom";
import aws from '../images/undraw_cloud_hosting_aodd.svg'
import looking_learn from '../images/undraw_i_can_fly_7egl (1).svg'
import looking_build from '../images/undraw_To_the_stars_qhyy.svg'
import looking_migrate from '../images/undraw_server_q2pb.svg'
import made_devs from '../images/undraw_programming_2svr.svg'




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
    <div class="expanded landing__section">
		<div class="container">
			<div class="expanded__inner">
				<div class="expanded__media">
					<img src={aws} class="expanded__image" alt="undraw" />
				</div>
				<div class="expanded__content">
					<h2 class="expanded__title" style={{fontSize: '3em'}}>What we offer</h2>
					<p class="expanded__text" style={{fontSize: '1.25em'}}>CloudCompare is a powerful and comprehensive public cloud platform and service comparison tool. It enables you to match each of your existing server assets to IaaS cloud hosting products across leading cloud providers in seconds.<br></br><br></br>Depending on what you are looking for; simply use our search feature to compare cloud services from different providers, choose from our curated list of cloud solution template list, or fill out our interactive survey and receive a custom IaaS solution tailored to you by our powerful analysis technology.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="steps landing__section">
		<div class="container">
			<h2 style={{fontSize: '3em'}}>Who can use CloudCompare?</h2>
		</div>
		<div class="container">
			<div class="steps__inner">
				<div class="step">
					<div class="step__media">
						<img src={looking_learn} class="step__image"/>
					</div>
					<h4 style={{fontSize: '2em'}}>Looking to <strong>learn</strong></h4>
					<p class="step__text" style={{fontSize: '1.25em'}}>Use our search feature to compare <br></br>different services from different providers.</p>
				</div>
				<div class="step">
					<div class="step__media">
						<img src={looking_build} class="step__image" alt=""/>
					</div>
					<h4 style={{fontSize: '2em'}}>Looking to <strong>build</strong></h4>
					<p class="step__text" style={{fontSize: '1.25em'}}>Use our search feature to compare <br></br>different services from different providers.</p>
				</div>
				<div class="step">
					<div class="step__media">
						<img src={looking_migrate} class="step__image" alt=""/>
					</div>
					<h4 style={{fontSize: '2em'}}>Looking to <strong>migrate</strong></h4>
					<p class="step__text" style={{fontSize: '1.25em'}}>Take our survey and let us help you make the migration to the cloud easy. Match current server assets to IaaS cloud services.</p>
				</div>
			</div>
		</div>
	</div>

  <div class="expanded landing__section">
		<div class="container">
			<div class="expanded__inner">
				<div class="expanded__media">
					<img src={made_devs} alt="" class="expanded__image" />
				</div>
				<div class="expanded__content">
					<h2 style={{fontSize: '3em'}} class="expanded__title">Made by Developpers</h2>
					<p class="expanded__text" style={{fontSize: '1.25em'}}>Being developpers, we made sure this solution could help you accomplish your goals with a <strong>easy-to-use</strong> tool that offers <strong>infinite analysis</strong> guaranteed to <strong>reduce the time and complexity</strong> to learn, build or move to the cloud.</p>
				</div>
			</div>
		</div>
	</div>
    
  <div class="cta cta--reverse">
		<div class="container">
			<div class="cta__inner">
				<h2 class="cta__title" style={{fontSize: '3em'}}>Get started now</h2>
				<p class="cta__sub cta__sub--center" style={{fontSize: '1.25em'}}>Begin your journey to the cloud</p>
        <Link className="button button__accent" to="/app">Try now for free</Link>
			</div>
		</div>
	</div>
  </div>
);

export default Index;
