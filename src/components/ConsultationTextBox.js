import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",

    justifyContent: "space-between",
    flexWrap: "wrap",
    // textAlign: 'center',
    minWidth: 400,
    maxWidth: "60%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function ConsultationTextBox(props) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className={classes.container} noValidate autoComplete="off">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <TextField
            style={{ width: "30%" }}
            required
            onChange={props.handleChange}
            name="name"
            value={props.name}

            id="outlined-required"
            label="Name"
            helperText="required*"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            style={{ width: "30%" }}
            required
            onChange={props.handleChange}
            name="email"
            id="outlined-required2"
            label="Email"
            value={props.email}
            helperText="required*"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            style={{ width: "30%" }}
            id="outlined-e
            onChange={props.handleChange}mail-input"
            label="Company name"
            name="company"
            value={props.company}

            onChange={props.handleChange}
            helperText="optional"
            className={classes.textField}
            type="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
        </div>
        <TextField
          id="outlined-textarea"
          label="Body"
          name="body"
          value={props.body}
          onChange={props.handleChange}
          helperText="required*"
          multiline
          style={{ margin: 10 }}
          fullWidth
          margin="none"
          variant="outlined"
          InputLabelProps={{
            classes: {
              input: classes.resize
            },
            shrink: true
          }}
        />
      </form>
    </div>
  );
}
