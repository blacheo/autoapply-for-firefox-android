import { useEffect, useState } from 'react';
import { Fab, Step, StepButton, StepContent, Stepper, Typography } from '@mui/material';
import { PersonalInfo } from '@/utils/personalInfo';
import { PersonalInfoFormStorage } from '@/utils/personalInfoFormStorage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PersonalInfoComponent } from './components/PersonalInfoForm';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { ResumeNaming } from './components/ResumeNaming';
import { ResumeSection } from './components/ResumeSection';
import { ResumeSelection } from './components/ResumeSelection';

function App() {
  const [activeStep, setActiveStep] = useState(0)
  const handleStep = (step: number) => () => {
    console.log(`handle step ${step}`)
    setActiveStep(step);
  };

  return (
    <>
      <Typography variant='h6'>Auto Applier</Typography>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        <Step key="Select a Resume">
          <StepButton onClick={handleStep(0)}>
            Select a Resume
          </StepButton>
          <StepContent>
            <ResumeSection/>
            <ResumeSelection/>
            <ResumeNaming />
          </StepContent>
        </Step>

        <Step key="Fill personal information">
          <StepButton onClick={handleStep(1)}>
            Enter personal information
          </StepButton>
          <StepContent>
            <PersonalInfoComponent />
          </StepContent>
        </Step>
      </Stepper>


    </>
  );
}

export default App;
