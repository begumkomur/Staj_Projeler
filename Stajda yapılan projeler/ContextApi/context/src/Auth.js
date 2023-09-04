import { useContext } from "react";
import AuthContext from './context/auth-context'


function Auth() {
    const {status , login} = useContext(AuthContext);
    console.log(status);
    return <div>
        <h1>Giriş yaptın mı?</h1>
        {status ? <p>Giriş Yaptım </p> : <p>Hayır</p>}
        <button onClick={login}>Giriş Yap</button>
    </div>;
}

export default Auth;