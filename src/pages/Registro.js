import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login_Register.css';

const Registro = () => {

    const [infoRegistro, setInfoRegistro] = useState({
        email:"",
        senha:"",
        usuario:"",
    })
    let navegar = useNavigate();
    const changeRoute = () => {
        let path = `/`;
        navegar(path);
    }
    return(
        <div>
            <div className="container-registro">
                
                <form>
                <h1 className="entrar" >Registre-se</h1>
                    <input
                        className="input-registro"
                        type="email"
                        placeholder="Insira o seu email"
                        onChange={(e) => {
                            setInfoRegistro({
                                ...infoRegistro,
                                email: e.target.value
                            })
                        }}
                        
                    />
                    <br/>
                    <input
                        className="input-registro"
                        type="password"
                        placeholder="Insira a sua senha"
                        onChange={(e) => {
                            setInfoRegistro({
                                ...infoRegistro,
                                senha: e.target.value
                            })
                        }}
                    />
                    <br/>
                    <input
                        className="input-registro"
                        type="username"
                        placeholder="Insira o seu nome de usuário"
                        onChange={(e) => {
                            setInfoRegistro({
                                ...infoRegistro,
                                senha: e.target.value
                            })
                        }}
                    />
                    <br/>
                    <button className="buttonPage" onClick={() =>{
                        console.log(infoRegistro)

                    }}>
                        Registrar
                    </button>

                    <button className="buttonPage" onClick={(changeRoute)}>
                        Voltar
                    </button>

                </form>
            </div>
        </div>
    )
}
export default Registro