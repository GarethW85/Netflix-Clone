// Getting the API for movie data
// added & at the end of desc 
const API_KEY = 'api_key=573f8b513dcf4ce87db42bd0968c42e0';
const BASE_URL =  'https://api.themoviedb.org/3';
const API_URL = BASE_URL +  '/discover/movie?sort_by=popularity.desc&' 
+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' +API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// What movies are in theatres?
// URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22


//Calling the function
getMovies(API_URL);

// getting movie data
function getMovies (url) {
    fetch (url).then(res => res.json()).then(data => {
        console.log (data.results);
        showMovies(data.results);
    })
}

//Creating elements to display the movie information
function showMovies(data) {
    main.innerHTML = ''; 

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        
        <div class="overview">
          <h3>Movie Info</h3>
          ${overview}
          <div class="single-info pt-3">
                    <span>Add to favorites:</span>
                    <span class="heart-icon">&#9829;</span>
                </div>
        </div>
       
        `
        //added created movie elements the HTML page
        main.appendChild(movieEl);
    })
}

// Card Rating declaration for styling
function getColor (vote){
    if(vote >= 8) {
        return 'green'
    }
    else if (vote >=5) {
        return 'orange'
    }
    else {
        return 'red'
    }   
}


// listen for event for the form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }
    else {
        getMovies(API_URL);
    }

})


