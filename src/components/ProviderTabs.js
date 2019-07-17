import React from 'react';
import { Route, Link, Router } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import logo_azure from "../images/logo_azure.png";
import logo_GCS from "../images/GCS_logo.png";
import logo_aws from "../images/aws_logo.png";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #111',
  },
  indicator: {
    backgroundColor: '#6c63ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: '1.5em',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#6c63ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#6c63ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#6c63ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#6c63ff',
  },
}));


const links = {
  "Azure" : "https://azure.microsoft.com/",
  "GCS" : "https://cloud.google.com/",
  "AWS" : "https://aws.amazon.com/"
}

const AWS = () => (
  <div class="provider_service_content_container">
  <div class="provider_service_content_title">
    <img style={{padding: 0}}src={logo_aws} width="100px" height="100px"/>
    <h1>Amazon web services</h1>
  </div>
  <div class="provider_service_content">
    <div class="provider_service_content_section">
      <h3>Developper(s): </h3>
      <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>Amazon</p>
    </div>
    <div class="provider_service_content_section">
      <h3>Initial release: </h3>
      <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>March, 2006</p>
    </div>
    <div class="provider_service_content_section">
    </div>
    <div class="provider_service_content_description">
      <p>
      Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud, which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including, hardware central processing units (CPUs) and graphics processing units (GPUs) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, customer relationship management (CRM), etc.
              Source: https://en.wikipedia.org/wiki/Amazon_Web_Services
        </p>
        <button style={{marginTop: "20px"}}class="button button__accent" onClick={(event) => {window.open(links["AWS"], "_blank")}}><h3 style={{color: "#fff", margin: 0}}><b>Go to website</b></h3></button>
    </div>

  </div>
</div>
)


const Azure = () => (
  <div class="provider_service_content_container">
    <div class="provider_service_content_title">
      <img style={{padding: 0}}src={logo_azure} width="100px" height="100px"/>
      <h1>Azure</h1>
    </div>
    <div class="provider_service_content">
      <div class="provider_service_content_section">
        <h3>Developper(s): </h3>
        <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>Microsoft</p>
      </div>
      <div class="provider_service_content_section">
        <h3>Initial release: </h3>
        <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>February 1, 2010</p>
      </div>
      <div class="provider_service_content_section">
      </div>
      <div class="provider_service_content_description">
        <p>
          Microsoft Azure (formerly Windows Azure) is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. 
          It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools and frameworks, 
          including both Microsoft-specific and third-party software and systems.
          Azure was announced in October 2008, started with codename "Project Red Dog",and released on February 1, 2010, as "Windows Azure" before being renamed "Microsoft Azure" on March 25,
          most users run Linux on Azure, some of the many Linux distributions offered, including Microsoft's own Linux-based Azure Sphere. 
              Source: https://en.wikipedia.org/wiki/Microsoft_Azure
          </p>
          <button style={{marginTop: "20px"}}class="button button__accent" onClick={(event) => {window.open(links["Azure"], "_blank")}}><h3 style={{color: "#fff", margin: 0}}><b>Go to website</b></h3></button>
      </div>

    </div>
  </div>
)

const GCS = () => (
  <div class="provider_service_content_container">
  <div class="provider_service_content_title">
    <img style={{padding: 0}}src={logo_GCS} width="100px" height="100px"/>
    <h1>Google Cloud Services</h1>
  </div>
  <div class="provider_service_content">
    <div class="provider_service_content_section">
      <h3>Developper(s): </h3>
      <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>Google</p>
    </div>
    <div class="provider_service_content_section">
      <h3>Initial release: </h3>
      <p style={{marginTop: 0, marginBottom: 0, marginLeft:"10px"}}>April 7, 2008</p>
    </div>
    <div class="provider_service_content_section">
    </div>
    <div class="provider_service_content_description">
      <p>
      Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. Alongside a set of management tools, it provides a series of modular cloud services including computing, data storage, data analytics and machine learning. Registration requires a credit card or bank account details.
            Source: https://en.wikipedia.org/wiki/Google_Cloud_Platform
        </p>
        <button style={{marginTop: "20px"}}class="button button__accent" onClick={(event) => {window.open(links["GCS"], "_blank")}}><h3 style={{color: "#fff", margin: 0}}><b>Go to website</b></h3></button>
    </div>

  </div>
</div>
)

export default function ProviderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <div>
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange}>
          <AntTab label="AWS" />
          <AntTab label="Azure" />
          <AntTab label="Google Cloud" />
        </AntTabs>
        <Typography className={classes.typography} />
      </div>
    </div>
    {value === 0 && <AWS />}
        {value === 1 && <Azure />}
        {value === 2 && <GCS />}
    </div>
  );
}
