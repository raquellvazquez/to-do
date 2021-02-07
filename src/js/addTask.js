import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";

export function addTask() {
  let inputValue = document.getElementById("input").value;

  if (inputValue === "") {
    document.querySelector("#alertModal").classList.add("open");
  } else {
    let task = `
      <li class="listItem taskIncomplete">
      <p class='nameTask'>
      ${inputValue} 
      </p> 
      <button class='close' type='button'>Eliminar</button>
      </li>`;
    document.getElementById("list").innerHTML += task;
    input.value = "";
  }

  completeTask();
  deleteTask();
}
