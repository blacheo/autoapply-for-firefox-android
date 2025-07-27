import { Button, Fab } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

export function App() {
    return (
    <>
        <Fab variant='extended'><CreateIcon sx={{ mr: 1 }}/>Autocomplete</Fab>
    </>
    )
}
