import React, { useEffect, useState } from "react";
import{ getMovies } from "../api";
import { useNavigate } from "react-router-dom";
import './Linha.css';


function Linha({path, title}){
    const [filmes, setFilmes] = useState([])
    const fetchFilmes = async (_path) => {
        try {
            const data = await getMovies(_path)
            setFilmes(data.results)
        } catch (e) {
            console.log("FetchFilmes erro: " + e)
        }
    }
    console.log(filmes)
    useEffect(() => {
        fetchFilmes(path)
    },[path])
    let navegar = useNavigate();
    const changeRoute = () => {
        let path = `/movies`;
        navegar(path);
    }

    return(
        <div className="linhaFilmesLista">
            <h2 className="title">{title}</h2>
            <div className="linha-cards">
                {filmes.map((c, index) => {
                    if (title === 'Em alta'){
                        return(
                            <>
                                <button className="imagemFilme-large" onClick={() => {
                                    changeRoute()
                                    
                                }} info={c.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${c.poster_path}`} alt=""/>
                                </button>
                            </>
                        ) 
                    }else{
                        return(
                            <>
                            <button className="imagemFilme" onClick={() => {
                                    changeRoute()
                                    
                                }} info={c.id}>
                                    <img src={`https://image.tmdb.org/t/p/w154${c.poster_path}`} alt=""/>
                                </button>
                            </>
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Linha