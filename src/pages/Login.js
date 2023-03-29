import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [info, setInfo] = useState({
        email:"",
        senha:"",
    })
    let navegar = useNavigate();
    const changeRoute = () => {
        let path = `/`;
        navegar(path);
    }
    const changeRouteRegister = () => {
        let path = `/register`;
        navegar(path);
    }
    return(
        <div>
            <div>
                <h1>Entrar</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Insira o seu email"
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                email: e.target.value
                            })
                        }}
                        
                    />
                    <br/>
                    <input
                        type="password"
                        placeholder="Insira a sua senha"
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                senha: e.target.value
                            })
                        }}
                    />
                    <br/>
                    <button onClick={() =>{
                        console.log(info)
                    }}>
                        Login
                    </button>

                    <button onClick={(changeRouteRegister)}>
                        Registrar
                    </button>

                    <button onClick={(changeRoute)}>
                        Voltar
                    </button>

                </form>
            </div>
        </div>
    )
}
export default Login