const Likes = require('../../../models/Likes');
const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');


class GetLikesMoviesController {
  async index(request, response) {
    try {
      const likes = await Likes.findAll();
      const likeMovies = [];
      //Se houver likes
      if(likes) {
        //Rodando item a item para obter os dados de cada filme
        for (let i = 0; i < likes.length; i++) {
          //Obtendo os dados dos filmes favoritos
          const url = Url.getApiAddress(`/movie/${likes[i].movie}`);
          const { data } = await axios.get(url);
          const movies = HandleMovie.getMoviesImage(data, true);
      
          likeMovies.push(movies);
        }//next
      }//end if

      return response.status(200).json(likeMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end try
  }//end fn
}//end class

module.exports = new GetLikesMoviesController();
