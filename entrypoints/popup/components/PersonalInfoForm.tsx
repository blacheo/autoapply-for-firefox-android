import { Button, Skeleton, Stack, TextField, Typography } from "@mui/material"

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

interface PersonalInfoProps {
  loading: boolean, form: PersonalInfo
}

export function PersonalInfoComponent({ loading, form }: PersonalInfoProps) {
  return (
    <>
      <Typography variant='h6'>Personal Information</Typography>
      {
        (loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : <form id='personalinfo'>
          <Stack className='pl-2' spacing={{ xs: 1, sm: 2 }}>
            <TextField id='first-name' label='First Name' defaultValue={form.firstName} />
            <TextField id='last-name' label='Last Name' defaultValue={form.lastName} />
            <TextField id='email-address' label='Email Address' defaultValue={form.emailAddress} />
            <TextField id='phone-number' label='Phone Number' defaultValue={form.phoneNumber} />
            <Button variant='contained' id='save-button' onClick={saveData}>Save</Button>
          </Stack>

        </form>)
      }
    </>

  )
}