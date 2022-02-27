const Url = require('./Url');

class HandleMovie {
  static getMoviesImage(movies, isOnlyOneMovie = false) {
    if (!isOnlyOneMovie) {
      return movies.map((movie) => {
        movie.poster_path = Url.getImageApiAddress(movie.poster_path);
        movie.backdrop_path = Url.getImageApiAddress(movie.backdrop_path);
        return movie;
      });
    }
    // else
    movies.poster_path = Url.getImageApiAddress(movies.poster_path);
    movies.backdrop_path = Url.getImageApiAddress(movies.backdrop_path);
    return movies;
  }
}

module.exports = HandleMovie;
