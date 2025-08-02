import { FormDataKeys, formDataKeys, PersonalInfoInputs, personalInfoStorage } from "@/utils/personalInfo"
import { Button, Skeleton, Stack, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"

async function saveData() {
  let firstName = document.getElementById("first-name") as HTMLInputElement
  let lastName = document.getElementById("last-name") as HTMLInputElement
  let emailAddress = document.getElementById("email-address") as HTMLInputElement
  let phoneNumber = document.getElementById("phone-number") as HTMLInputElement

  
}

export function PersonalInfoComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInfoInputs>()

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<PersonalInfoInputs>();

  const inputField = (id: FormDataKeys) => {
    return (
      <>
        <TextField
          id={id}
          label={camelCaseToSentence(id)}
          defaultValue={form === undefined ? "" : form[id]}
          {...register(id)}
        />
      </>
    )
  }

  useEffect(() => {
    personalInfoStorage.getValue().then(result => {
      if (result) {
        setForm(result)
        
      } 
      setLoading(false)
    })
    return () => setLoading(true)
  }, [])
  return (
    <>
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
            { formDataKeys.map((value) => inputField(value))}
            <Button variant='contained' id='save-button' onClick={saveData}>Save</Button>
          </Stack>

        </form>)
      }
    </>

  )
}