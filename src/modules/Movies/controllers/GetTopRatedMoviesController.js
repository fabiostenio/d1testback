const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class GetTopRatedMoviesController {
  async index(request, response) {
    try {
      const url = Url.getApiAddress('movie/top_rated');
      const { data } = await axios.get(url);
      const movies = HandleMovie.getMoviesImage(data.results);
      //dando retorno
      return response.status(200).json(movies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end try
  }//end fn
}//end class

module.exports = new GetTopRatedMoviesController();
