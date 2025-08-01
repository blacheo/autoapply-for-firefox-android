import { TextField, Typography } from "@mui/material";

export function ResumeNaming() {
    const [resumeName, setResumeName] = useState("");

    /*
    useEffect(
        () => {
            ResumeStorage.getResumeName().then((value) => setResumeName(value)).catch()
        }, []
    );*/

    return (
        <>
            <TextField label='Resume Name' defaultValue={resumeName} />
            <Typography variant="subtitle1">This is the filename used by the resume being submitted</Typography>
        </>
    )
}