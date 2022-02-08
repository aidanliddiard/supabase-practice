// IMPORT MODULES under test here:
// import { example } from '../example.js';

const { test, skip } = QUnit;

import {
  getDirectorNames,
  getHighestGrossingMovie,
  getMovieById,
  getMovieByTitle,
  getMovies,
  getMoviesAfter,
  getMoviesWithDirector,
  getOldestMovie,
} from "../fetch-utils.js";

test("getMovies should return the list of movies", async (expect) => {
  const resp = await getMovies();
  expect.equal(resp.length, 13);
});

skip("getMoviesWithDirector returns movies with director", async (expect) => {
  const resp = await getMoviesWithDirector();
  expect.equal(resp.length, 13);
  expect.notEqual(resp[0].directors, undefined);
});

skip("getDirectorNames returns the list of director names", async (expect) => {
  const resp = await getDirectorNames();
  expect.equal(resp.length, 9);
  expect.notEqual(resp[0].name, undefined);
  expect.equal(Object.keys(resp[0]).length, 1); // should ONLY return the name
});

skip("getMovieById returns a specific movie by ID", async (expect) => {
  const resp = await getMovieById(2);
  expect.equal(resp.title, "Episode V - The Empire Strikes Back");
});

skip("getMovieByTitle should match using title", async (expect) => {
  const resp = await getMovieByTitle("Episode V - The Empire Strikes Back");
  expect.equal(resp.id, 2);
});

skip("getOldestMovie returns Episode IV", async (expect) => {
  const resp = await getOldestMovie();
  expect.equal(resp.title, "Episode IV - A New Hope");
});

skip("getMoviesAfter returns all movies after a certain year", async (expect) => {
  const resp = await getMoviesAfter(2010);
  expect.equal(resp.length, 5);
});

skip("getHighestGrossingMovie returns the movie with the highest box_office amount", async (expect) => {
  const resp = await getHighestGrossingMovie();
  expect.equal(resp.title, "Star Wars: The Force Awakens");
});
