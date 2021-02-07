import { completeTask } from "./completeTask.js";

export function addTask() {
  let inputValue = document.getElementById("input").value;

  if(inputValue === "") {
    alert("Please add a new task");
  } else {
    let task = `
      <li class="listItem taskIncomplete">
      <p class='nameTask'>
      ${inputValue} 
      </p> 
      <button class='eliminar' type='button'>Eliminar</button>
      </li>`;
    document.getElementById("list").innerHTML += task;
    input.value = "";
  }

  completeTask();
}
