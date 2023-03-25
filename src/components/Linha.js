import React, { useEffect, useState } from "react";
import{ getMovies } from "../api";
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

    return(
        <div className="linhaFilmesLista">
            <h2 className="title">{title}</h2>
            <div className="linha-cards">
                {filmes.map((c, index) => {
                    if (title === 'Em alta'){
                        return <img className="imagemFilme-large" src={`https://image.tmdb.org/t/p/w300${c.poster_path}`} alt=""/>
                    }else{
                        return <img className="imagemFilme" src={`https://image.tmdb.org/t/p/w300${c.poster_path}`} alt=""/>
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Linha