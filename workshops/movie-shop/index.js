const movies = [
  {
    id: 1,
    name: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    year: 2010,
    genre: "Sci-Fi"
  },
  {
    id: 2,
    name: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    year: 1999,
    genre: "Action, Sci-Fi"
  },
  {
    id: 3,
    name: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    id: 4,
    name: "The Dark Knight",
    description: "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2008,
    genre: "Action, Crime, Drama"
  },
  {
    id: 5,
    name: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
    year: 1999,
    genre: "Drama"
  }
];

const parasite = {
  id: 6,
  name: "Parasite",
  description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  year: 2019,
  genre: "Drama, Thriller"
}

const madMax = {
  id: 7,
  name: "Mad Max: Fury Road",
  description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant who controls a vital water supply.",
  year: 2015,
  genre: "Action, Adventure, Sci-Fi"
}


// Create a movie store using object
const onlineMovieStore = {
  movies: movies,
  getAllMovies() {
    this.movies.forEach(movie => {
      console.log(`Title: ${movie.name} Genre: ${movie.genre} Year: ${movie.year}`)
    })
  },
  getMovieById(id) { // : movie | undefined
    return this.movies.find(movie => movie.id === id);
  },
  getAllMoviesAfterYear(year) { // : movie[]
    return this.movies.filter(movie => movie.year > year);
  },
  createNewMovie(movie) {
    if (movie.name && movie.genre) {
      this.movies.push(movie);

      return movie
    } 
    console.log("Movie Name and Genre are required!");
    
    return undefined
  }
};

// console.log(onlineMovieStore.movies);
// onlineMovieStore.movies // list of all movies
// onlineMovieStore.getAllMovies() // title: string, genre: string, year:number
// const movieById = onlineMovieStore.getMovieById(200) // by movie by id
// console.log('movie-by-id: ', movieById)
// const oldMovies = onlineMovieStore.getAllMoviesAfterYear(2008) // filter movies after year
// console.log(oldMovies)
// onlineMovieStore.createNewMovie(parasite) // add new movie
// onlineMovieStore.getAllMovies()
// console.log(onlineMovieStore.movies);
// onlineMovieStore.createNewMovie(madMax) // add new movie
// console.log(onlineMovieStore.movies);


// console.log('shape:', onlineMovieStore);
