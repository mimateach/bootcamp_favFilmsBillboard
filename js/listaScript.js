const requestURL = "./json/peliculas.json";

async function fetchMoviesListJSON() {
    const response = await fetch (requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesListJSON().then((movies) => {
for (let index = 0; index<movies.peliculas.length; index++) {
    const listOfMovies = document.getElementById("listOfMovies");
    
    let id = movies.peliculas[index].id;
    let photo = movies.peliculas[index].image;
    let title = movies.peliculas[index].nombre;
    let direccion = movies.peliculas[index].direccion;
    let genre = movies.peliculas[index].clasificacion;
    let link = movies.peliculas[index].link;

    listOfMovies.innerHTML +=`
            <table>
                <thead>
                    <th>Título</th>
                    <th>Dirección</th>
                    <th>Clasificación</th>
                    <th>FilmAffinity</th>
                </thead>
                <tr>
                    <td>${title}</td>
                    <td>${direccion}</td>
                    <td>${genre} </td>
                    <td><button><a href="${link}">Ver</a></button></td>
                </tr>
            </table> 
    `
}

})