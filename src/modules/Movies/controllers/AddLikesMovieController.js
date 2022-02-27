const Likes = require('../../../models/Likes');

class AddLikesMovieController {
  
  async index(request, response) {
    //Obtendo a variável enviada
    const { id } = request.body;

    try {
      //console.log(id);
      await Likes.create({
        movie: id,
      });
      return response.status(201).send('created');

    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end try
    
  }//end fn
}//end class

module.exports = new AddLikesMovieController();
