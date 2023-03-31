import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login_Register.css';

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
            <div className="container-login" >        
                <form>
                    <h1 className="entrar">Entrar</h1>
                    <input
                        className="input"
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
                        className="input"
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
                    <button
                    className="buttonPage"
                    onClick={() =>{
                        console.log(info)
                    }}>
                        Login
                    </button>

                    <button
                    className="buttonPage"
                    onClick={(changeRouteRegister)}>
                        Registrar
                    </button>

                    <button
                    className="buttonPage"
                    onClick={(changeRoute)}>
                        Voltar
                    </button>

                </form>
            </div>
        </div>
    )
}
export default Login