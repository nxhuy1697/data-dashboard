
import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react"


const Login = () => {
    const {data : session } = useSession();


    if (session) {
        return <>
        <h1>
        Signed in as {session?.user?.email}
        </h1>      
        <Button variant={"contained"} color="error" onClick={() => signOut()} > Sign out</Button>
        </>
    }
    return<>

        <Button variant={"contained"} color="success" onClick={() => signIn()}> Sign in</Button>
    </>
}
export default Login;

