const Likes = require('../../../models/Likes');

class RemoveLikesMovieController {
  async index(request, response) {
    const { id } = request.params;
    try {
      //Excluindo
      await Likes.destroy({
        where: {
          movie: id,
        },
      });
      //Retorno estático
      return response.status(204).send('destroyed');
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end cry
  }//end fn
}//end class

module.exports = new RemoveLikesMovieController();
