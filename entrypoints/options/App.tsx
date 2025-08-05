import { useState } from 'react';
import { Button, Stack, Step, StepButton, StepContent, Stepper, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PersonalInfoComponent } from './components/PersonalInfoForm';
import { ResumeNaming } from './components/ResumeNaming';
import { ResumeSection } from './components/ResumeSection';
import { ResumeSelection } from './components/ResumeSelection';

function App() {
  const steps = [
    {task: "Select a Resume", element: <ResumeNaming />}, 
    {task: "Enter your personal clientInformation", element: <PersonalInfoComponent />}];

  const [activeStep, setActiveStep] = useState(0)
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    handleStep(activeStep + 1);
  };

  return (
    <>
      <Typography variant='h5'>Auto Applier</Typography>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        {steps.map((value, index) => (
          <Step>
            <StepButton onClick={handleStep(index)}>
              {value.task}
            </StepButton>
            <StepContent>
              {value.element}
              <Button disabled={activeStep === 0} onClick={handleStep(activeStep - 1)}>Back</Button>
              <Button onClick={() => handleNext()}>Next</Button>
            </StepContent>

          </Step>
        ))}
      </Stepper>


    </>
  );
}

export default App;
