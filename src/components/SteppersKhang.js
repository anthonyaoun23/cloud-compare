import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepConnector from "@material-ui/core/StepConnector";
import ListService from './ListService';
import TableBuild from './TableBuild';

const useStyles = makeStyles(theme => ({
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
      transform: 'scale(2)',
  },
  stepText: {
    marginLeft: "15px",
    fontSize: "32px"
  },
  stepConnector: {
    line: { marginLeft: "16px" }
  },
}));

function getSteps() {
  return ["Select service type(s)", "Compare service providers"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div style={{marginLeft: "15px"}}><Typography>{"Which service(s) would you like to bring to the cloud?"}</Typography><ListService/></div>;
    case 1:
      return <div style={{marginLeft: "15px"}}><Typography>{"These are the main providers of your picked cloud services"}</Typography><TableBuild/></div>;
    default:
      return <Typography>{"Wow we didn't expect that step! :) Please Refresh"}</Typography>;
  }
}

export default function SteppersKhang() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

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
                {getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div style={{marginLeft: "15px"}}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
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
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}
