import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


//styles for the consultation boxes on the consulati screen
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

//this function returns the boxes
export default function ConsultationTextBox() {
  const classes = useStyles();

//return the boxes
  return (
    <form className={classes.container} noValidate autoComplete="off">
    <TextField
        required
        id="outlined-required"
        label="Name"
        helperText="required*"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    <TextField
        required
        id="outlined-required2"
        label="Email"
        helperText="required*"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Company name"
        helperText="optional"
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
        helperText="required*"
        multiline
        style={{ margin: 10 }}
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
