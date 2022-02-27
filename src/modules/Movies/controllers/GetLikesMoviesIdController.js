const Likes = require('../../../models/Likes');

class GetLikesMoviesIdController {
  async index(request, response) {
    try {
      const likes = await Likes.findAll();
      return response.status(200).json(likes);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }//end try
  }//end class
}//end class

module.exports = new GetLikesMoviesIdController();
