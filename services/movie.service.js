const config = require('../config.json');

module.exports = {
    searchURL,
    movieIdURL
}

function searchURL(req) {
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + config.api_key;
    let query = req.body.query;
    if (query.includes('&') || !query.replace(/\s/g, '').length) {
        return 'ERROR';
    }
    query = query.replace(' ', '+');
    url += '&query=' + query;
    if (req.body.page) {
        url += '&page=' + String(req.body.page);
    }
    return url;
}

function movieIdURL(req) {
    if (req.body.id) {
        return 'https://api.themoviedb.org/3/movie/' + req.body.id + "?api_key=" + config.api_key;
    }
    return 'ERROR';
}
