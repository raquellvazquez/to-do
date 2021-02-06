import { addTask } from "./addTask.js";

import { header, dateHeader } from "./header.js";

/**
 * Section Header
 */
header;
dateHeader;
/**
 * Add new task section
 */
let input = document.createElement("input");
input.setAttribute("id", "input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "New task...");

document.getElementById("app").appendChild(input);

let button = document.createElement("button");
button.setAttribute("id", "addTask");
button.type = "button";
button.innerText = "Add";

document.getElementById("app").appendChild(button);

document.querySelector("#addTask").addEventListener("click", addTask);

let div = document.createElement("div");
div.setAttribute("id", "toDoList");

document.getElementById("app").appendChild(div);

let ul = document.createElement("ul");
ul.setAttribute("id", "list");
document.getElementById("app").appendChild(ul);

