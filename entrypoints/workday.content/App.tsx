import { Button, Card, CardContent, Fab, Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { WorldayApplicationForm } from "./workdayApplicationForm";
import { personalInfoStorage } from "@/utils/personalInfo";

async function autofill() {
    console.log("starting autocomplete")
    const workdayApp = new WorldayApplicationForm()

    const personalInfo = await personalInfoStorage.getValue()

    if (personalInfo === null) {
        return
    }

    workdayApp.autofill(personalInfo)
}


export function App() {
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    useEffect(() => {
        const waf = new WorldayApplicationForm()
        const mutationObserver = new MutationObserver(
            () => {
                setIsLoginScreen(waf.onLoginScreen());
            })
        mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });
        return () => {
            mutationObserver.disconnect();
        }
    }, []);

    return (
        <>
            {isLoginScreen ? (
                <>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">Login to use Autofill</Typography>
                        </CardContent>
                    </Card>

                </>
            ) : (
                <Fab variant='extended' onClick={autofill}><CreateIcon sx={{ mr: 1 }} />Autocomplete</Fab>
            )}

        </>
    )
}
