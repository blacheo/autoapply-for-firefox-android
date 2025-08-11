import { Button, Card, CardActionArea, CardActions, CardContent, Grid, IconButton, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import { MouseEventHandler } from 'react';
import { Experience, experiencesStorage } from '@/utils/jobExperience';

function SingleWorkExperienceForm(experience: Experience, deleteSelf: MouseEventHandler<HTMLButtonElement> | undefined, deleteDisabled: boolean) {
    return (
        <>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid spacing={2}>
                            <TextField label="Company" defaultValue={experience.company} />
                            <TextField label="Job Title" defaultValue={experience.jobTitle} />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid spacing={2}>
                                <DatePicker label="Start Date" defaultValue={experience.startDate} />
                                <DatePicker label="End Date" defaultValue={experience.endDate} />
                            </Grid>
                        </LocalizationProvider>
                        <TextField label="Job Description" multiline defaultValue={experience.description} fullWidth />
                    </Grid>


                </CardContent>
                <CardActionArea />
                <CardActions>
                    <IconButton size='small' onClick={deleteSelf} disabled={deleteDisabled}><DeleteIcon /></IconButton>
                </CardActions>
            </Card>


        </>
    )
}

function defaultExperience(): Experience {
    return { startDate: dayjs('2020-01-01'), endDate: dayjs('2021-01-01'), jobTitle: "", company: "", city: "", type: "", description: "" }
}

export function ExperienceForm() {
    const [experiences, setExperiences] = useState([defaultExperience()]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        experiencesStorage.getValue().then(value => {
            if (value !== null) {
                setExperiences(value)
            }
        })

        setIsLoading(false)
        return () => { setIsLoading(true) }
    }, [])

    return (
        <>
            <Stack spacing={2}>
                {experiences.map((value, index) => SingleWorkExperienceForm(value, () => setExperiences(experiences.filter((_, j) => j != index)), experiences.length == 1))}
            </Stack>

            <Button onClick={() => setExperiences([...experiences, defaultExperience()])}>Add Work Experience</Button>
        </>
    )
}