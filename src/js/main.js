import { addTask } from "./addTask.js";
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
addSectionContainer.setAttribute('style', `display:flex;
                                            justify-content: center;
                                            aling-items: center;
                                `);
document.getElementById("app").appendChild(addSectionContainer);
/**
 * Variable to save a input element
 */
let input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "New task...");
    input.setAttribute('autofocus', 'autofocus');
    input.setAttribute('style', `
                                width: 27%; 
                                color: #333; 
                                font: 24px "Lato", Arial, sans-serif; 
                                letter-spacing: 1px;
                                border: 0;
                                padding: 7px 0;
                                border-bottom: 1px solid #CD6155;
                                text-transform: capitalize;
                                transition: 0.4s
                    `);
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
    button.style.border="none";
    button.style.backgroundColor="transparent";
    button.style.outline= "none";
    button.innerHTML ="<span class='alert-headingg' style='font-size: 3em; color: Tomato;'><i class='fa fa-plus' aria-hidden='true'></i></span>";

    document.getElementById("addDiv").appendChild(button);

    document.querySelector("#addTask").addEventListener("click", addTask);


let div = document.createElement("div");
    div.setAttribute("id", "toDoList");

document.getElementById("app").appendChild(div);

let ul = document.createElement("ul");
    ul.setAttribute("id", "list");
document.getElementById("app").appendChild(ul);

