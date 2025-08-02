import { ResumeStorage } from "@/utils/resumeStorage";
import { NativeSelect } from "@mui/material";

export function ResumeSelection() {
    const [resume, setResume] = useState<File | null>(null);

    useEffect(() => {
        ResumeStorage.resume.getValue().then((file) => setResume(file));
        ResumeStorage.resume.watch((file) => setResume(file));
    }, [])

    return (
        <>
            {resume !== null && (
                <>
                    <NativeSelect>
                        <option>{resume.name}</option>
                    </NativeSelect>

                </>)}
        </>
    )
}