const API_KEY ='4b76351213a95373dfa88d7d0c214cdc';

const CATEGORIAS = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`

    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`
    },
    {
        name: "documentary",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
    }
]

export const getMovies = async (path) => {
    try {
        let url = await fetch(`https://api.themoviedb.org/3${path}`)
        const response = await url.json();
        console.log(response);
        return response
    } catch (error) {
        console.log(error)
    }
}

export default CATEGORIAS