import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import ProviderPage from '../pages/ProviderPage';
import ReactTooltip from 'react-tooltip';

//styles du tableau
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

//function qui return le data (sa simplify le code)
function createData(name, button1, button2, button3, button4) {
  return { name, button1, button2, button3, button4 };
}

//les links associer au service du provider
const links = {
  "AWS Speech Analytics" : "https://aws.amazon.com/solutions/ai-powered-speech-analytics-for-amazon-connect/?trk=sl_card",
  "Azure Speech Services" : "https://azure.microsoft.com/en-ca/services/cognitive-services/speech-services/",
  "Google Cloud Speech to Text" : "https://cloud.google.com/speech-to-text/",
  "AWS Fraud Detection" : "https://aws.amazon.com/solutions/fraud-detection-using-machine-learning/",
  "Azure Advanced Threat Detection" : "https://azure.microsoft.com/en-ca/features/azure-advanced-threat-protection/",
  "" : "https://cloud.google.com/event-threat-detection/"
}

//création des rangers
const rows = [
  createData('Speech Analytics',
  <button className= "button button__accent" data-tip data-for='global' onClick={(event) => {window.open(links["AWS Speech Analytics"], "_blank")}}><b>AWS Speech Analytics</b></button>,
   <button className= "button button__accent" onClick={(event) => {window.open(links["Azure Speech Services"], "_blank")}}><b>Azure Speech Services</b></button>,
   <button className= "button button__accent" onClick={(event) => {window.open(links["Google Cloud Speech to Text"], "_blank")}}><b>Google Cloud Speech to Text</b></button>),


  createData('Threat Detection', <button className= "button button__accent" onClick={(event) => {window.open(links["AWS Fraud Detection"], "_blank")}}><b>AWS Fraud Detection</b></button>,
  <Link className= "button button__accent" onClick={(event) => {window.open(links["Azure Advanced Threat Detection"], "_blank")}}><b>Azure Advanced Threat Detection</b></Link>,
  <Link className= "button button__accent" onClick={(event) => {window.open(links["Google Cloud Event Threat Detection"], "_blank")}}><b>Google Cloud Event Threat Detection</b></Link>),
//   createData('Big data processing', 262, 16.0, 24),
//   createData('Analytics and visualization', 305, 3.7, 67),
//   createData('Database', 356, 16.0, 49),
];

//styling
const ColoredLine = () => (
    <hr
        style={{
            color: 'black',
            backgroundColor: 'black',
            height: 1
        }}
    />
);


//function qui créer le tableau
export default function TableBuild() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
            <ReactTooltip className='tooltip' id='global'>
    <h1 className="toolTip_main_title">AWS Speech Analytics</h1>
    <ColoredLine />
    <div className="toolTip_title_div">
    <h3 className='toolTip_title'>Pricing</h3>
    </div>
    <p className='toolTip_title'>0.3$/hr</p>

    <div className="toolTip_title_div">
    <h3 className='toolTip_title'>Learning Difficulty</h3>
    </div>
    <p className='toolTip_title'>Medium</p>

   </ReactTooltip>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'black', fontSize: '20px'}}>Providers</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="center">AWS</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="center">Azure Services</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="center">Google Cloud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
