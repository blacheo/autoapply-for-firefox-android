import { useEffect, useState } from 'react';
import { Button, Skeleton, TextField } from '@mui/material';
import { PersonalInfo } from '@/utils/personalInfo';
import { PersonalInfoFormStorage } from '@/utils/personalInfoFormStorage';

function saveData() {


  let firstName = document.querySelector("#first-name")?.nodeValue ?? "empty"
  let lastName = document.querySelector("#last-name")?.nodeValue ?? ""
  let emailAddress = document.querySelector("#email-address")?.nodeValue ?? ""
  let phoneNumber = document.querySelector("#phone-number")?.nodeValue ?? ""

  let personalInfo = PersonalInfo.create({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber
    })
  PersonalInfoFormStorage.setValues(personalInfo)
}

function App() {

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(PersonalInfo.create());

  useEffect(() => {
    PersonalInfoFormStorage.getValues().then(result => {
      setForm(result)
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
          <TextField id='first-name' label='First Name' value={form.firstName}/>
          <TextField id='last-name' label='Last Name' value={form.lastName}/>
          <TextField id='email-address' label='Email Address' value={form.emailAddress}/>
          <TextField id='phone-number' label='Phone Number' value={form.phoneNumber}/>
          <Button onClick={saveData}>Save</Button>
        </form>)}
    </>
  );
}

export default App;
