import { useEffect, useState } from 'react';
import { Button, Skeleton, TextField } from '@mui/material';
import { PersonalInfo } from '@/utils/personalInfo';
import { PersonalInfoFormStorage } from '@/utils/personalInfoFormStorage';

async function saveData() {


  let firstName = document.getElementById("first-name") as HTMLInputElement
  let lastName = document.getElementById("last-name") as HTMLInputElement
  let emailAddress = document.getElementById("email-address") as HTMLInputElement
  let phoneNumber = document.getElementById("phone-number") as HTMLInputElement

  let personalInfo = PersonalInfo.create({
      firstName: firstName.value,
      lastName: lastName.value,
      emailAddress: emailAddress.value,
      phoneNumber: phoneNumber.value
    })

  await PersonalInfoFormStorage.setValues(personalInfo)
}

function App() {

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(PersonalInfo.create());

  useEffect(() => {
    PersonalInfoFormStorage.getValues().then(result => {
      setForm(result)
      console.log(result)
      setLoading(false)
    })
    return () => setLoading(true)
  }, [])

  return (
    <>
      <h1>Auto Applier</h1>
      <h2>Your Resumes</h2>
      <h2>Personal Information</h2>
      {(loading ? (
        <>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
        </>
      ) : <form id='personalinfo'>
          <TextField id='first-name' label='First Name' defaultValue={form.firstName}/>
          <TextField id='last-name' label='Last Name' defaultValue={form.lastName}/>
          <TextField id='email-address' label='Email Address' defaultValue={form.emailAddress}/>
          <TextField id='phone-number' label='Phone Number' defaultValue={form.phoneNumber}/>
          <Button id='save-button' onClick={saveData}>Save</Button>
        </form>)}
    </>
  );
}

export default App;
