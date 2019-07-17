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
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    sps: false,
    as: false,
    sds: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine, sps, as, sds } = state;
  const error = [gilad, jason, antoine, , sps, as, sds].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Server Assets</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange("gilad")}
                value="gilad"
              />
            }
            label="Servers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange("jason")}
                value="jason"
              />
            }
            label="Virtual Desktop Server"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sps}
                onChange={handleChange("sps")}
                value="sps"
              />
            }
            label="Software Platform Server"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={as}
                onChange={handleChange("as")}
                value="as"
              />
            }
            label="Applications Server"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sds}
                onChange={handleChange("sds")}
                value="sds"
              />
            }
            label="Storage/ Data Server"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </div>
  );
}
