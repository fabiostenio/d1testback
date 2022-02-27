const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class GetMovieDetailsController {
  async index(request, response) 
  {
    const { id } = request.params;
    try {
      const url = Url.getApiAddress(`/movie/${id}`);
      const { data } = await axios.get(url);
      const movie = HandleMovie.getMoviesImage(data, true);
      //Dando retorno
      return response.status(200).json(movie);

    } catch (err) {

      return response.status(400).json({ exception: err.message });
    }//end try

  }//end fn

}//end class

module.exports = new GetMovieDetailsController();
