import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepConnector from "@material-ui/core/StepConnector";
import ListService from "./ListService";
import TableBuild from "./TableBuild";
import TableAssets from "./TableAssets";
import CheckboxesGroup from "../components/SelectorsAnthony";

const styles = theme => ({
  root: {
    width: "80%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  icon: {
    transform: "scale(2)"
  },
  stepText: {
    marginLeft: "15px",
    fontSize: "32px"
  },
  stepConnector: {
    line: { marginLeft: "16px" }
  }
});

class SteppersAnthony extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      options: {
        "Servers": false,
        "Virtual Desktop Servers": false,
        "Software Platform Server": false,
        "Applications Server": false,
        "Storage/Data Server": false
      },
      selectionError: false,
    };
  }

  getSteps = () => {
    return [
      "Select server asset(s)",
      "Select service(s)",
      "Compare service providers"
    ];
  };

  updateSelections = (name) => {
    let { options } = this.state;
    const newValue = !options[name];
    this.setState({ options : {...options, [name]: newValue} });
  };

  getStepContent = step => {
    const { options, selectionError } = this.state;
    switch (step) {
      case 0:
        return (
          <div>
            <Typography>
              {"Which server asset(s) would you like to bring to the cloud?"}
            </Typography>
            <CheckboxesGroup
              options={options}
              selectionError={selectionError}
              updateSelections={this.updateSelections}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <Typography>
              {"Which service(s) would you like to bring to the cloud?"}
            </Typography>
            <ListService />
          </div>
        );
      case 2:
        return (
          <div>
            <Typography>
              These are the main providers of your picked{" "}
              <strong>cloud server assets</strong>
            </Typography>
            <TableAssets />
            <Typography style={{ marginTop: "48px" }}>
              These are the main providers of your picked{" "}
              <strong>cloud services</strong>
            </Typography>
            <TableBuild />
          </div>
        );
      default:
        return (
          <Typography>
            {"Wow we didn't expect that step! :) Please Refresh"}
          </Typography>
        );
    }
  };

  handleNext = () => {
    const { options } = this.state;
    let next = false;
    Object.keys(options).map(option =>{
      if(options[option]) next = true;
    })
    next ? this.setState(prevState => ({ activeStep: prevState.activeStep + 1, selectionError: false })) : this.setState({selectionError: true});
  };

  handleBack = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  render() {
    const { activeStep } = this.state;
    let steps = this.getSteps();

    const { classes } = this.props;

    const stepIconClass = {
      classes: {
        root: {
          height: "60px",
          width: "60px"
        },
        test: {
          fontSize: "24px"
        }
      }
    };

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step
                key={label}
                connector={<StepConnector className={classes.stepConnector} />}
              >
                <StepLabel
                  StepIconProps={{
                    classes: { root: classes.icon }
                  }}
                  style={{ fontSize: "100px" }}
                  classes={{ label: classes.stepText }}
                >
                  {label}
                </StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SteppersAnthony);
