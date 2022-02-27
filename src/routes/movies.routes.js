const { Router } = require('express');
const GetMovieDetailsController = require('../modules/Movies/controllers/GetMovieDetailsController');
const GetTopRatedMoviesController = require('../modules/Movies/controllers/GetTopRatedMoviesController');
const GetTrendingsController = require('../modules/Movies/controllers/GetTrendingsController');
const AddLikesMovieController = require('../modules/Movies/controllers/AddLikesMovieController');
const GetLikesMoviesIdController = require('../modules/Movies/controllers/GetLikesMoviesIdController');
const FindMoviesController = require('../modules/Movies/controllers/FindMoviesController');
const RemoveLikesMovieController = require('../modules/Movies/controllers/RemoveLikesMovieController');
const GetLikesMoviesController = require('../modules/Movies/controllers/GetLikesMoviesController');

const moviesRoutes = Router();
moviesRoutes.get('/movies/getTopRatedMovies', GetTopRatedMoviesController.index);
moviesRoutes.get('/movies/findMovie', FindMoviesController.index);
moviesRoutes.post('/movies/likeMovies', AddLikesMovieController.index);
moviesRoutes.get('/movies/likeMoviesId', GetLikesMoviesIdController.index);
moviesRoutes.get('/movies/likeMovies', GetLikesMoviesController.index); 
moviesRoutes.get('/movies/getTrendings', GetTrendingsController.index);
moviesRoutes.get('/movies/getDetails/:id', GetMovieDetailsController.index);
moviesRoutes.delete('/movies/likeMovies/:id', RemoveLikesMovieController.index);

module.exports = moviesRoutes;
