import React, { useEffect, useState } from "react";
import CATEGORIAS, { getMovies } from "../api";
import "./Banner.css"

function Banner(){
    const [movie, setMovie] = useState({})
    const randomMovie = async (_path) => {
        try {
           const data = await getMovies((CATEGORIAS.find(c => c.name === 'topRated')).path)
           const randomIndex = Math.floor(Math.random() * data.results.length)
           setMovie(data?.results[randomIndex])
        } catch (error) {
            console.log("Banner error " + error)
        }
    }

    useEffect(()=>{
        randomMovie()
    }, [])
    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}>
            <div className="banner-content">
                <h1 className="banner-title">
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div>
                    {movie.overview}
                </div>
                <div className="btn-container">
                    <div className="banner-btn">Assistir</div>
                    <div className="banner-btn">Minha lista</div>
                </div>
            </div>
        </header>
    )
}
export default Banner