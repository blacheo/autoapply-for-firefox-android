import { Button, Card, CardActionArea, CardActions, CardContent, Fab, Grid, IconButton, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickerValue } from '@mui/x-date-pickers/internals';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';

function SingleWorkExperienceForm(experience: Experience) {
    return (
        <>
            <Card>
                <CardContent>
                    <Stack
                        spacing={1}
                        direction="row"
                        useFlexGap>
                        <TextField label="Company" defaultValue={experience.company} />

                        <TextField label="Job Title" defaultValue={experience.jobTitle} />
                    </Stack>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack
                            spacing={1}
                            direction="row"
                            useFlexGap>
                            <DatePicker label="Start Date" defaultValue={experience.startDate} />
                            <DatePicker label="End Date" defaultValue={experience.endDate} />
                        </Stack>

                    </LocalizationProvider>
                    <TextField label="Job Description" multiline defaultValue={experience.description} />
                </CardContent>
                <CardActionArea />
                <CardActions>
                    <IconButton size='small'><DeleteIcon /></IconButton>
                </CardActions>
            </Card>


        </>
    )
}

export type Experience = {
    startDate: PickerValue
    endDate: PickerValue
    jobTitle: string
    company: string
    city: string
    type: string
    description: string
}

function defaultExperience(): Experience {
    return { startDate: dayjs('2020-01-01'), endDate: dayjs('2021-01-01'), jobTitle: "", company: "", city: "", type: "", description: "" }
}

export function ExperienceForm() {
    const [experiences, setExperiences] = useState([defaultExperience()]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {


        setIsLoading(false)
        return () => { setIsLoading(true) }
    }, [])

    return (
        <>
            <Stack spacing={2}>
                {experiences.map((value) => SingleWorkExperienceForm(value))}
            </Stack>

            <Button onClick={() => setExperiences([...experiences, defaultExperience()])}>Add Work Experience</Button>
        </>
    )
}