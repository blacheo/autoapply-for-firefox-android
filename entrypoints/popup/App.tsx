import { useEffect, useState } from 'react';
import { Fab, Step, StepButton, StepContent, Stepper } from '@mui/material';
import { PersonalInfo } from '@/utils/personalInfo';
import { PersonalInfoFormStorage } from '@/utils/personalInfoFormStorage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PersonalInfoComponent } from './components/PersonalInfoForm';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function App() {

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(PersonalInfo.create());
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    PersonalInfoFormStorage.getValues().then(result => {
      setForm(result)
      console.log(result)
      setLoading(false)
    })
    return () => setLoading(true)
  }, [])

  const handleStep = (step: number) => () => {
    console.log(`handle step ${step}`)
    setActiveStep(step);
  };

  return (
    <>
      <h1 className='text-base'>Auto Applier</h1>
      <h2 className='text-base'></h2>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        <Step key="Select a Resume">
          <StepButton onClick={handleStep(0)}>
            Select a Resume
          </StepButton>
          <StepContent>
            <input type="file" id="input" multiple />

            <Fab><DriveFolderUploadIcon/></Fab>
          </StepContent>
        </Step>

        <Step key="Fill personal information">
          <StepButton onClick={handleStep(1)}>
            Enter personal information
          </StepButton>
          <StepContent>
            <PersonalInfoComponent loading={loading} form={form} />
          </StepContent>
        </Step>
      </Stepper>


    </>
  );
}

export default App;
