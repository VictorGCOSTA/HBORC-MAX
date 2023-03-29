import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <div>
                <h1>Registre-se</h1>
                <form>
                    <input
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
                    <button onClick={() =>{
                        console.log(infoRegistro)
                    }}>
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
export default Registro