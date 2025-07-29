import { Button, Fab } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { WorldayApplicationForm } from "./workdayApplicationForm";
import { PersonalInfoFormStorage } from "@/utils/personalInfoFormStorage";

async function autofill() {
    console.log("starting autocomplete")
    const workdayApp = new WorldayApplicationForm()

    workdayApp.autofill(await PersonalInfoFormStorage.getValues())
}


export function App() {
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    useEffect(() => {
        const waf = new WorldayApplicationForm()
        const mutationObserver = new MutationObserver(
            () => {
                console.log("mutation detected")
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
            Login to use Autofill
            </>
        ) : (
            <Fab variant='extended' onClick={autofill}><CreateIcon sx={{ mr: 1 }}/>Autocomplete</Fab>
        )}
        
    </>
    )
}
