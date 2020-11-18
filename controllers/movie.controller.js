const movieService = require('../services/movie.service');
const axios = require('axios');

module.exports = {
    searchMovie,
    movieDetails
}

function searchMovie(req, res, next) {
    const url = movieService.searchURL(req);
    if (url === 'ERROR') {
        next('Error in Search query');
        return;
    }
    axios.get(url)
        .then((response) => {
            const result = response.data;

            const movieList = [];
            result.results.forEach( (movie) => {
                movieList.push({
                    id: movie.id,
                    title: movie.title,
                    release_date: movie.release_date,
                    rating_10: movie.vote_average,
                    rating_voters: movie.vote_count,
                    overview: movie.overview
                });
            });

            res.json({
                page: result.page,
                total_movies: result.total_results,
                total_pages: result.total_pages,
                movies: movieList
            })


        })
        .catch((error) => {
            next(error);
        });
}

function movieDetails(req, res, next) {
    const url = movieService.movieIdURL(req);
    if (url === 'ERROR') {
        next('Error in Search query');
        return;
    }
    console.log(url);
    axios.get(url)
        .then((response) => {
            const result = response.data;

            console.log(result);
            const genres = [];
            result.genres.forEach( (genre) => {
                genres.push(genre.name);
            });

            const companies = [];
            result.production_companies.forEach((company) => {
                companies.push(company.name);
            });

            let collectionName = "";
            if (result.belongs_to_collection) {
                collectionName = result.belongs_to_collection.name;
            }

            res.json({
                id: result.id,
                title: result.title,
                genres: genres,
                release_date: result.release_date,
                rating_10: result.vote_average,
                rating_voters: result.vote_count,
                overview: result.overview,
                production_companies: companies,
                collection: collectionName,
                budget: result.budget,
                revenue: result.revenue
            })

        })
        .catch((error) => {
            next(error);
        });
}
