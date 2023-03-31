import React from "react";
import{ getMovies } from "../api";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Linha from "../components/Linha";

const Filmes = () => {

    const [filmes, setFilmes] = useState([])
    const fetchFilmes = async (_path) => {
        try {
            const data = await getMovies(_path)
            setFilmes(data.results)
        } catch (e) {
            console.log("FetchFilmes erro: " + e)
        }
    }

    useEffect(() => {
        fetchFilmes(path)
    },[path])

    let navegar = useNavigate();
    const changeRoute = () => {
        let path = `/`;
        navegar(path);
    }

    return (
       <div>

        </div>
            
            )

}
