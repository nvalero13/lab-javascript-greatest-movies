/*
  [
    {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
    },
  ]
*/

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((el) => el.director);
    // BONUS
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (el) => el.director === "Steven Spielberg" && el.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  else {
    const scoresSum = moviesArray.reduce((a, b) => {
      return b.score ? a + b.score : a;
    }, 0);
    const scoresAvg = scoresSum / moviesArray.length;
    return Math.round(scoresAvg * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArray = moviesArray.filter(el => el.genre.includes("Drama"))
  if (dramaMoviesArray.length === 0) return 0;
  else {
    const dramaScoresSum = dramaMoviesArray.reduce((a, b) => {
      return b.score ? a + b.score : a;
    }, 0);
    const dramaScoresAvg = dramaScoresSum / dramaMoviesArray.length;
   
    return Math.round(dramaScoresAvg * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArraySorted = [...moviesArray].sort((a,b) => a.year - b.year)
    return moviesArraySorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArraySorted = [...moviesArray].sort((a,b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
  const titleMoviesArraySorted = moviesArraySorted.filter((el, index) => index < 20).map(el => el.title)
  return titleMoviesArraySorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
