const requestURL = "./json/peliculas.json";

async function fetchMoviesJSON() {
const response = await fetch(requestURL);
const movies = await response.json();
return movies;
}

fetchMoviesJSON().then((movies) => {
for (let index = 0; index < movies.peliculas.length; index++) {
    const billboard = document.getElementById("billboard");

    let id = movies.peliculas[index].id;
    let poster = movies.peliculas[index].image;
    let title = movies.peliculas[index].nombre;
    let direccion = movies.peliculas[index].direccion;
    let genre = movies.peliculas[index].clasificacion;
    let link = movies.peliculas[index].link;
    billboard.innerHTML += `
        <div class="card" style="width: 20rem;">
            <img src=${poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Dirección: ${direccion}</li>
                <li class="list-group-item">Género: ${genre}</li>
            </ul>
            <div class="card-body">
                <a href="${link}" class="btn card-link">FilmAffinity</a>
            </div>
        </div>
        `;
}
});

