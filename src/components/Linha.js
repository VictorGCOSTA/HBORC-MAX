import React, { useEffect, useState } from "react";
import { getMovies } from "../api";

function Linha(path, title){
    const [filmes, setFilmes] = useState([])
    const fetchFilmes = async (_path) => {
        try {
            const data = await getMovies(_path)
            console.log(data.results)
            setFilmes(data.results)
        } catch (e) {
            console.log("FetchFilmes erro: " + e)
        }
    }

    useEffect(() => {
        fetchFilmes(path)
    },[path])

    return(
        <div>Nada</div>
    )
}

export default Linha