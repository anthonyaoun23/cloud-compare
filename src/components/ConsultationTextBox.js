import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
        minWidth: 400,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
 },
}));

export default function ConsultationTextBox() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
    <TextField
        required
        id="outlined-required"
        label="Name"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    <TextField
        required
        id="outlined-required2"
        label="Email"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Company name"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Body"
        multiline
        style={{ margin: 10 }}
        placeholder="Placeholder"
        fullWidth
        margin="none"
        variant="outlined"
        InputLabelProps={{
          classes: {
              input: classes.resize,
            },
          shrink: true,
        }}
      />
    </form>
  );
}
