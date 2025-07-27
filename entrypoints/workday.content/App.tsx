import { Button, Fab } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { firstNameInput } from "./workdayLocations";

function autofill() {
    firstNameInput.
}

export function App() {
    return (
    <>
        <Fab variant='extended' onClick={autofill}><CreateIcon sx={{ mr: 1 }}/>Autocomplete</Fab>
    </>
    )
}
