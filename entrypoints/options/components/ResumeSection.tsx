import { ResumeStorage } from "@/utils/resumeStorage";
import { Button } from "@mui/material"
import { ChangeEvent } from "react";

function UploadButton() {
    const uploadRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("File uploaded")
        if (e.target.files === null) {
            return
        }

        const file = e.target.files[0]
        if (file) {
            ResumeStorage.resume.setValue(file)
        }
        
    }

    return (
        <>
        <Button onClick={() => uploadRef.current?.click()}>
            Upload Resume
        </Button>
        <input
            type="file"
            ref={uploadRef}
            onChange={handleChange}
            style={{display: 'none'}} 
            />
        </>
    )
}

export function ResumeSection() {
    
    return (
        <>
            <UploadButton/>
        </>
    )
}