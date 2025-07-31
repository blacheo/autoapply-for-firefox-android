import { Button } from "@mui/material"

function UploadButton() {
    const uploadRef = useRef<HTMLInputElement>(null);
    const handleChange = () => {
        console.log("File uploaded")
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