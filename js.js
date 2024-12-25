// Movie Collection Array
const movieCollection = [
    { title: "Inception", genre: "Sci-Fi", rating: 9, releaseYear: 2010 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.5, releaseYear: 2014 },
    { title: "The Dark Knight", genre: "Action", rating: 9.1, releaseYear: 2008 }
];

// Function to display the movie list in HTML
function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    movieCollection.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.title} (${movie.genre}, ${movie.releaseYear}, Rating: ${movie.rating})`;
        movieList.appendChild(listItem);
    });
}

// Function to display the highest rated movie
function displayHighestRated() {
    const highestRated = movieCollection.reduce((max, movie) => movie.rating > max.rating ? movie : max, movieCollection[0]);
    document.getElementById('highest-rated').textContent = `${highestRated.title} (Rating: ${highestRated.rating})`;
}

// Function to list all movie titles
function displayMovieTitles() {
    const movieTitlesList = document.getElementById('movie-titles-list');
    movieTitlesList.innerHTML = '';
    const titles = movieCollection.map(movie => movie.title);
    titles.forEach(title => {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        movieTitlesList.appendChild(listItem);
    });
}

// Add Movie to the collection
document.getElementById('add-movie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);

    movieCollection.push({ title, genre, rating, releaseYear });
    displayMovies();
    displayHighestRated();
    displayMovieTitles();
    
    // Clear input fields
    document.getElementById('add-movie-form').reset();
});

// Filter movies by genre
document.getElementById('filter-btn').addEventListener('click', function() {
    const genre = document.getElementById('filter-genre').value.toLowerCase();
    const filteredMovies = movieCollection.filter(movie => movie.genre.toLowerCase() === genre);

    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.title} (${movie.genre}, ${movie.releaseYear}, Rating: ${movie.rating})`;
        movieList.appendChild(listItem);
    });
});

// Filter movies by release year
document.getElementById('year-filter-btn').addEventListener('click', function() {
    const year = parseInt(document.getElementById('year-filter').value);
    const filteredMovies = movieCollection.filter(movie => movie.releaseYear > year);

    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.title} (${movie.genre}, ${movie.releaseYear}, Rating: ${movie.rating})`;
        movieList.appendChild(listItem);
    });
});

// Initialize page with movie data
displayMovies();
displayHighestRated();
displayMovieTitles();
