import { addTask } from "./addTask.js";
import { header, dateHeader } from "./header.js";
/**
 * Section Header
 */
header;
dateHeader;

/**
 * Variable to save a div element
 * Div that contain an input and button to add a new task
 */
let addSectionContainer = document.createElement("div");
addSectionContainer.setAttribute("id", "addDiv");
document.getElementById("app").appendChild(addSectionContainer);
/**
 * Variable to save a input element
 */
let input = document.createElement("input");
input.setAttribute("id", "input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "New task...");
input.setAttribute("autofocus", "autofocus");
input.addEventListener("focus", function () {
  this.style.outline = "none";
});

document.getElementById("addDiv").appendChild(input);

/**
 * Variable to save a button element
 */
let button = document.createElement("button");
button.setAttribute("id", "addTask");
button.type = "button";
button.innerHTML =
  "<span class='btn-icon'><i class='fa fa-plus' aria-hidden='true'></i></span>";

document.getElementById("addDiv").appendChild(button);

document.querySelector("#addTask").addEventListener("click", addTask);

/**
 * Modal structure
 */
let alertModal = document.createElement("div");
alertModal.setAttribute("id", "alertModal");

document.getElementById("app").appendChild(alertModal);

/**
 * Variable to save a div element
 */
let div = document.createElement("div");
div.setAttribute("id", "div");

document.getElementById("alertModal").appendChild(div);

/**
 * Variable to save a h2 element
 */
let textAlert = document.createElement("h2");
textAlert.setAttribute("id", "textAlert");
textAlert.innerHTML = "Please add a new task";

document.getElementById("div").appendChild(textAlert);

/**
 * Variable to save a button element
 * in addition to adding an event to close the modal
 */
let buttonAlert = document.createElement("button");
buttonAlert.setAttribute("id", "buttonAlert");
buttonAlert.innerHTML = "Ok";

document.getElementById("div").appendChild(buttonAlert);

document.querySelector("#buttonAlert").addEventListener("click", () => {
  document.querySelector("#alertModal").classList.remove("open");
});

/**
 * Variable to save a div element
 */
let toDoList = document.createElement("div");
toDoList.setAttribute("id", "toDoList");

document.getElementById("app").appendChild(toDoList);

/**
 * Variable to save a div element
 */
let divList = document.createElement("div");
divList.setAttribute("id", "divList");

document.getElementById("toDoList").appendChild(divList);

/**
 * Variable to save a h2 element
 */
let toDoListH3 = document.createElement("h2");
toDoListH3.innerHTML =
  "<span class=''><i class='fa fa-angle-down' aria-hidden='true'></i></span> Click to mark a task as complete";
toDoListH3.setAttribute("class", "subtitle");

document.getElementById("divList").appendChild(toDoListH3);

/**
 * Variable to save a ul element
 */
let list = document.createElement("ul");
list.setAttribute("id", "list");
document.getElementById("divList").appendChild(list);

/**
 * Variable to save a p element
 */
let noTask = document.createElement("p");
noTask.setAttribute("id", "noTask");
noTask.setAttribute("class", "noTask");
noTask.innerText = "No Task.";
document.getElementById("divList").appendChild(noTask);
