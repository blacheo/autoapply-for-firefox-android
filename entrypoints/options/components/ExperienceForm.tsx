import { Button, Card, CardActionArea, CardActions, CardContent, Grid, IconButton, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import { Experience } from '@/utils/jobExperience';
import { Controller, FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form';


function defaultExperience(): Experience {
    return { startDate: dayjs('2020-01-01'), endDate: dayjs('2021-01-01'), jobTitle: "", company: "", city: "", type: "", description: "" }
}

export function ExperienceForm() {
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            experiences: [defaultExperience()]
        }
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "experiences"
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    const singleWorkExperienceForm = (experience: FieldArrayWithId<{ experiences: Experience[]; }, "experiences", "id">, index: number, deleteDisabled: boolean) => (
        <>
            <Card key={experience.id}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid spacing={2}>
                            <TextField label="Company" defaultValue={experience.company} {...register(`experiences.${index}.company`)} />
                            <TextField label="Job Title" defaultValue={experience.jobTitle} {...register(`experiences.${index}.jobTitle`)} />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid spacing={2}>
                                <Controller
                                    name={`experiences.${index}.startDate`}
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker label="Start Date" defaultValue={experience.startDate} onChange={(date) => field.onChange(date)} />
                                    )}>

                                </Controller>

                                <Controller
                                    name={`experiences.${index}.endDate`}
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker label="End Date" defaultValue={experience.endDate} onChange={(date) => field.onChange(date)} />
                                    )}>

                                </Controller>

                               
                            </Grid>
                        </LocalizationProvider>
                        <TextField label="Job Description" multiline defaultValue={experience.description} {...register(`experiences.${index}.description`)} fullWidth />
                    </Grid>


                </CardContent>
                <CardActionArea />
                <CardActions>
                    <IconButton size='small' onClick={() => remove(index)} disabled={deleteDisabled}><DeleteIcon /></IconButton>
                </CardActions>
            </Card>


        </>
    )

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    {fields.map((value, index) => singleWorkExperienceForm(value, index, fields.length == 1))}
                </Stack>
                <Button type="submit">Save</Button>
            </form>


            <Button onClick={() => append(defaultExperience())}>Add Work Experience</Button>
            
        </>
    )
}