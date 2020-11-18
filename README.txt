Please run 'npm install' to install node dependencies into folder.

Search and Details have been separated into two url routes (look at '/routes/movies.router.js').

Running localhost:4000/movies/search with a json body { "query" : "search query" } provides a list of movies with some details (movieId, title, release_date, rating, rating voters, and the overview). It also provides the total number of results, and total number of pages. so running the same url with { "query" : "search query", "page" : #page } would provide the list of movies associated with that page.

CURL commands: curl --request GET -H "Content-Type: application/json" -d "{\"query\":\"SEARCHQUERY"}" http://localhost:4000/movies/search
CURL commands: curl --request GET -H "Content-Type: application/json" -d "{\"query\":\"SEARCHQUERY", \"page\": PAGE#}" http://localhost:4000/movies/search

Once you've found a movie that you want more details about, you can run localhost:4000/movies/movie with a json body { "id" : #movieId }, and that will return the details pertaining to that movie (movieId, title, genres, release date, rating, rating voters, overview, production companies, the collection the movie belongs to (if any), the budget, and the revenue).

CURL commands: curl -v --request GET -H "Content-Type: application/json" -d "{\"id\": movieID# }" http://localhost:4000/movies/movie
