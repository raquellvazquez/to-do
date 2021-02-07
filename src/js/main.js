import { addTask } from "./addTask.js";
import { completeTask } from "./completeTask.js";
import { eliminar } from "./deleteTask.js";
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
input.setAttribute('autofocus', 'autofocus');
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
button.innerHTML = "<span class='alert-heading'><i class='fa fa-plus' aria-hidden='true'></i></span>";

document.getElementById("addDiv").appendChild(button);

document.querySelector("#addTask").addEventListener("click", addTask);


let div = document.createElement("div");
div.setAttribute("id", "toDoList");

document.getElementById("app").appendChild(div);

let ul = document.createElement("ul");
ul.setAttribute("id", "list");
document.getElementById("app").appendChild(ul);






