//Variable = movieData
//Object = everything inside movieData
//Array (type of object) = anything inside [0,1,2] like ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"]...
//element = each one of the inside of the arrays like: "Jason Schwartzman"
//= movie names
//Keys = plot, cast, runtime, year, rating
//cells (values) = details of cells ("A year after their...")
//index = numbering the cells 0,1,2...

let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

//This will show movie1
function movie1() {
  let keys = Object.keys(movieData);
  keys;
  document.getElementById("output").innerHTML =
    "Your best movie choise is: " +
    "The Darjeeling Limited" +
    " with a rating of: " +
    movieData["The Darjeeling Limited"].rating;
}
//This will show movie2
function movie2() {
  let keys = Object.keys(movieData);
  keys;
  document.getElementById("output").innerHTML =
    "Your best movie choise is: " +
    "The Royal Tenenbaums" +
    " with a rating of: " +
    movieData["The Royal Tenenbaums"].rating;
}
//This will show movie3
function movie3() {
  let keys = Object.keys(movieData);
  keys;
  document.getElementById("output").innerHTML =
    "Your best movie choise is: " +
    "Fantastic Mr. Fox" +
    " with a rating of: " +
    movieData["Fantastic Mr. Fox"].rating;
}
//This will show movie4
function movie4() {
  let keys = Object.keys(movieData);
  keys;
  document.getElementById("output").innerHTML =
    "Your best movie choise is: " +
    "The Grand Budapest Hotel" +
    " with a rating of: " +
    movieData["The Grand Budapest Hotel"].rating;
}

//Add another movie by user

function other() {
  let oldKey = "The Grand Budapest Hotel";
  let newKey = prompt("which is your bast movie?");
  movieData[newKey] = movieData[oldKey];
  //   delete movieData[oldKey];
  document.getElementById("output").innerHTML =
    "Your best movie is " + newKey + "!";
}

//This will show all movies details

// function showDetails() {
//   document.getElementById("output").innerHTML = JSON.stringify(
//     movieData,
//     null,
//     4
//   );
// }

function showDetails() {
  let keys = Object.keys(movieData);
  let table =
    "<table><tr><th>Movie Title</th><th>Year</th><th>Rating</th></tr>";
  keys.sort((a, b) => movieData[a].year - movieData[b].year);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let row = `<tr><td><u>${key}</u><td><u>${movieData[key].year}</u></td>`;
    let year = movieData[key].rating;
    row += `<td>${year}</td>`;
    row += "</tr>";
    table += row;
  }
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

// This will show movie name and year - sorted by year of the movie
function sortByYear() {
  let keys = Object.keys(movieData);
  let table = "<table><tr><th>Movie Title</th><th>Year</th></tr>";
  keys.sort((a, b) => movieData[a].year - movieData[b].year);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let row = `<tr><td><u>${key}</u></td>`;
    let year = movieData[key].year;
    row += `<td>${year}</td>`;
    row += "</tr>";
    table += row;
  }
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

// This will show movie name and rating - sorted by rating of the movie

function sortByRating() {
  let keys = Object.keys(movieData);
  let table = "<table><tr><th>Movie Title</th><th>Rating</th></tr>";
  keys.sort((a, b) => movieData[a].rating - movieData[b].rating);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let row = `<tr><td><u>${key}</u></td>`;
    let rating = movieData[key].rating;
    row += `<td>${rating}</td>`;
    row += "</tr>";
    table += row;
  }
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

//Let the user rate again the top rated movie
function rateAgain() {
  let newRate = "The Royal Tenenbaums";
  let newValue = prompt(
    "The movie 'The Royal Tenenbaums' is the top rated, how much would you rate it?"
  );
  movieData["The Royal Tenenbaums"].rating = newValue;

  let keys = Object.keys(movieData);
  let table = "<table><tr><th>Movie Title</th><th>Rating</th></tr>";
  keys.sort((a, b) => movieData[a].rating - movieData[b].rating);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let row = `<tr><td><u>${key}</u></td>`;
    let rating = movieData[key].rating;
    row += `<td>${rating}</td>`;
    row += "</tr>";
    table += row;
  }
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}
