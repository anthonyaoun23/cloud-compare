import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('AI and Machine Learning', 159, 6.0, 24),
  createData('Data warehouse', 237, 9.0, 37),
  createData('Big data processing', 262, 16.0, 24),
  createData('Analytics and visualization', 305, 3.7, 67),
  createData('Database', 356, 16.0, 49),
];

export default function TableKhang() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'black', fontSize: '20px'}}>Providers</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="right">AWS</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="right">Azure Services</TableCell>
            <TableCell style={{color: 'black', fontSize: '20px'}} align="right">Google Cloud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
