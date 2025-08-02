import { FormDataKeys, formDataKeys, PersonalInfoInputs, personalInfoStorage } from "@/utils/personalInfo"
import { Button, Skeleton, Stack, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"

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


  const onSubmit: SubmitHandler<PersonalInfoInputs> = async (data) => await personalInfoStorage.setValue(data)
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
        ) : <form id='personalinfo' onSubmit={handleSubmit(onSubmit)}>
          <Stack className='pl-2' spacing={{ xs: 1, sm: 2 }}>
            { formDataKeys.map((value) => inputField(value))}
            <Button variant='contained' id='save-button' type="submit">Save</Button>
          </Stack>

        </form>)
      }
    </>

  )
}