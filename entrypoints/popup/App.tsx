import { useEffect, useState } from 'react';
import { Button, Skeleton, TextField } from '@mui/material';
import { PersonalInfo } from '@/utils/personalInfo';
import { PersonalInfoFormStorage } from '@/utils/personalInfoFormStorage';

function saveData() {
  const form = document.querySelector('#personalinfo') as HTMLFormElement
  const formData = new FormData(form);

  formData.values()
}

function App() {

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(new PersonalInfo);

  useEffect(() => {
    PersonalInfoFormStorage.getValues().then(result => {
      setForm(result)
      
    })
    return () => setLoading(true)
  }, [])

  return (
    <>
      <h1>Auto Applier</h1>
      <h2>Your Resumes</h2>
      <h2>Personal Information</h2>
      ({loading} ? (
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      ) : <form id='personalinfo'>
          <TextField id='first-name' label='First Name' value={form.firstName}/>
          <TextField id='last-name' label='Last Name' value={form.lastName}/>
          <TextField id='email-address' label='Email Address' value={form.emailAddress}/>
          <TextField id='phone-number' label='Phone Number' value={form.phoneNumber}/>
          <Button type='submit' onClick={saveData}>Save</Button>
        </form>)
    </>
  );
}

export default App;
