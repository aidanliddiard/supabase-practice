const SUPABASE_URL = "https://njovlynmvtgkoexzepbb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTMxNjU3MSwiZXhwIjoxOTU2ODkyNTcxfQ.4sFYy_xhbdh7hVgaEmH_ILGTIl6rsqtUgzAJsizIxkA";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from("movies").select("*");
  return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
}

export async function getDirectorNames() {
  // return the list of the director's names
}

export async function getMovieById(id) {
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
