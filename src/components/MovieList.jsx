const MovieList = ({ movies, genre }) => {

    let filteredMovies = genre === '' || genre === 'All' ? movies : movies.filter(movie => movie.genre === genre)

  return (
    <div id="movieList">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, idx) => {
            return (
              <tr key={idx}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
