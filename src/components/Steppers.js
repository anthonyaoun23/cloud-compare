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
    fontSize: "32px",
    marginLeft: "15px",
  },
  stepConnector: {
    line: { marginLeft: "16px" }
  }
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function Steppers() {
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
                <Typography style={{marginLeft: "15px"}}>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
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
