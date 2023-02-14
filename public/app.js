fetchMovies()
async function fetchMovies() {
  const res = await fetch('/api/movies');
  let data = await res.json();

  document.querySelector('#sort-by-year').addEventListener('click', () => {
    const minYear = document.querySelector('#min-year').value;
    const maxYear = document.querySelector('#max-year').value;
    data = data.filter(
      movie => movie.releaseDate >= minYear && movie.releaseDate <= maxYear
    );
    displayMovies(data);
  });

  document.querySelector('#sort-by-rating').addEventListener('click', () => {

    const minRating = document.querySelector('#min-rating').value;
    const maxRating = document.querySelector('#max-rating').value;
    data = data.filter(
      movie => Math.floor(movie.rating * 100) >= minRating && Math.floor(movie.rating * 100) <= maxRating
    );

    displayMovies(data);
  });

  document.querySelector('#sort-by-age').addEventListener('click', () => {
    const minAge = document.querySelector('#min-age').value;
    const maxAge = document.querySelector('#max-age').value;

    data = data.filter(
      movie => movie.age - rating >= minAge && movie.age <= maxAge
    );
    displayMovies(data);
  });


  function displayMovies(movies) {
    document.querySelector('#movies').innerHTML = `
        <table>
          <tr>
            <th> Title </th>
            <th> Year </th>
            <th> Age rating </th>
            <th> Genre </th>
            <th> Rating </th>
          </tr>
          ${movies.map(movie => `
            <tr>
              <td> ${movie.title}</td>
              <td> ${movie.releaseDate.substring(0, 4)}</td>
              <td> ${movie.age} </td>
              <td> ${movie.genres}</td>
              <td> ${movie.rating * 100}%</td> </tr>`).join('')}
        </table>
      `;
  }

  displayMovies(data);
}