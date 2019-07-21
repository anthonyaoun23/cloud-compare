import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyItems: 'center'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   gilad: false,
  //   jason: false,
  //   antoine: false,
  //   sps: false,
  //   as: false,
  //   sds: false
  // });

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

  // const { gilad, jason, antoine, sps, as, sds } = props;
  // const error =
  //   [gilad, jason, antoine, , sps, as, sds].filter(v => v).length !== 2;

  const { options, updateSelections, selectionError } = props;
  return (
    <div className={classes.root}>
      <FormControl
        error={selectionError}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">
          {selectionError ? " Please select server asset(s)" : "Server Assets"}
        </FormLabel>
        <FormGroup>
          {Object.keys(options).map(option => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options[option]}
                    onChange={() => {
                      updateSelections(option);
                    }}
                    value={options[option]}
                  />
                }
                label={option}
              />
            );
          })}
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </div>
  );
}
