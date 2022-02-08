const SUPABASE_URL = 'https://lhgrvdplrdquocvtuqid.supabase.co';
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZ3J2ZHBscmRxdW9jdnR1cWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODcsImV4cCI6MTk1OTkxNzQ4N30.YL07XOjiKwuejJXfhxE0yqRWv0PG7Qnk_XDLuQA-S-E";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from("movies").select("*");
  //console.log(resp);
  return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
const resp = await client.from('movies').select(`title, directors (name)`);
return checkError(resp);

}

export async function getDirectorNames() {
  // return the list of the director's names
const resp = await client.from('directors').select('name');
console.log(resp);
return checkError(resp);

}

export async function getMovieById(id) {
  // return the movie with the given id
  const resp = await client.from('movies').select('title').eq('id', id).single();
  console.log(resp);
  return checkError(resp);

}

export async function getMovieByTitle(title) {
  // return the movie with the given title
  const resp = await client.from('movies').select('id').like('title', title).single();
  console.log(resp);
  return checkError(resp);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
  const resp = await client.from('movies').select('title').order('year').limit(1).single();
  console.log(resp);
  return checkError(resp);
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
  const resp = await client.from('movies').select('id').gt('year', year);
  console.log(resp);
  return checkError(resp);
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
  const resp = await client.from('movies').select('*').order('box_office', { ascending: false }).limit(1).single();
  return checkError(resp);
}
