import React, { useEffect, useState } from "react";
import{ getMovies } from "../api";
// import './Linha.css';

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
        <div>
            <h1>{title}</h1>
            <div>
                <ul className="linhaFilmesLista">
                {filmes.map((c, index) =>(
                    <li className="linhaFilmesItens"><img src={`https://image.tmdb.org/t/p/w300${c.poster_path}`} alt=""/></li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Linha