import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import ProviderPage from "../pages/ProviderPage";
import ReactTooltip from "react-tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "IaaS",
    <Link
      data-tip
      data-for="global"
      className="button button__accent"
      to={`/AWS/SpeechAnalytics`}
    >
      <b>Amazon Elastic Compute Cloud</b>
    </Link>,
    <Link className="button button__accent" to={`/AWS/SpeechAnalytics`}>
      <b>Azure Virtual Machines</b>
    </Link>,
    <Link className="button button__accent" to={`/AWS/SpeechAnalytics`}>
      <b>Compute Engine</b>
    </Link>
  ),
  createData(
    "PaaS",
    <Link className="button button__accent" to={`/AWS/SpeechAnalytics`}>
      <b>AWS Elastic Beanstalk</b>
    </Link>,
    <Link className="button button__accent" to={`/AWS/SpeechAnalytics`}>
      <b>App Service</b>
    </Link>,
    <Link className="button button__accent" to={`/AWS/SpeechAnalytics`}>
      <b>App Engine</b>
    </Link>
  )
  //   createData('Big data processing', 262, 16.0, 24),
  //   createData('Analytics and visualization', 305, 3.7, 67),
  //   createData('Database', 356, 16.0, 49),
];

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: "black",
      backgroundColor: "black",
      height: 1
    }}
  />
);

export default function TableAssets() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ReactTooltip className="tooltip" id="global">
        <h1 className="toolTip_main_title">AWS Speech Analytics</h1>
        <ColoredLine />
        <div className="toolTip_title_div">
          <h3 className="toolTip_title">Pricing</h3>
        </div>
        <p className="toolTip_title">0.3$/hr</p>

        <div className="toolTip_title_div">
          <h3 className="toolTip_title">Learning Difficulty</h3>
        </div>
        <p className="toolTip_title">Medium</p>
      </ReactTooltip>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "black", fontSize: "20px" }}>
              Providers
            </TableCell>
            <TableCell
              style={{ color: "black", fontSize: "20px" }}
              align="center"
            >
              AWS
            </TableCell>
            <TableCell
              style={{ color: "black", fontSize: "20px" }}
              align="center"
            >
              Azure Services
            </TableCell>
            <TableCell
              style={{ color: "black", fontSize: "20px" }}
              align="center"
            >
              Google Cloud
            </TableCell>
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
