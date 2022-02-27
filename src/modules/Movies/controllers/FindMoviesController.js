const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class FindMoviesController {

  async index(request, response) {
    const search = request.query.search;
    try {
      //Buscando resultado na API de filmes
      const response_api = await axios.get(Url.getApiAddress('search/movie', `query=${search}`));
      let movies = [];
      if (response_api) {
        //Obtando os filmes segundo a pesquisa
        movies = HandleMovie.getMoviesImage(response_api.data.results);
      }//end if
      return response.status(200).json(movies);

    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end try
  }//end fn
}//end class

module.exports = new FindMoviesController();
