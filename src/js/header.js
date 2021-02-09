/**
 * Variable to save a h1 element
 */
let h1 = document.createElement("h1");
h1.innerText = "To do list";
h1.setAttribute("class", "title");

/**
 * Variable to save a p element
 */
let dateElement = document.createElement("p");

/**
 * Variable to save a array with months
 */
let monthArray = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

/**
 * Variable to save a array with the days of the week
 */
var days = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

/**
 * Variable to save a Date object
 */
var date = new Date();

dateElement.innerHTML =
  days[date.getDay()] +
  ", " +
  date.getDate() +
  " " +
  monthArray[date.getMonth()] +
  " " +
  date.getFullYear();
dateElement.setAttribute("class", "date");

export let header = document.getElementById("app").appendChild(h1);
export let dateHeader = document.getElementById("app").appendChild(dateElement);
