const personId = window.location.pathname.split('/').splice(-1)[0]

fetchMovies()

async function fetchMovies() {
    try {
        const res = await fetch('/api/pokemon/' + personId)
        const movie = await res.json()
        if (movie.error) {
            throw new Error(movie.error)
        }

        document.querySelector('#movie').innerHTML = `
    <h1>${movie.name}</h1>
    <h3> Age:${movie.stats}</h3>
    `
    }

    catch (error) {
        document.querySelector('#movie').innerHTML = `
    <h1>error</h1>
    <h3>${error.message} </h3>
    `
    }
}