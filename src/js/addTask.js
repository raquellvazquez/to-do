import { deleteTask } from "./deleteTask.js";

export function addTask() {
  let inputValue = document.getElementById("input").value;

  if (inputValue === "") {
    document.querySelector("#alertModal").classList.add("open");
  } else {
    let task = `
      <li>
      <input class='checkbox' type='checkbox'>
      <p class='nameTask'>
      ${inputValue} 
      </p> 
      <button class='eliminar' type='button'>Eliminar</button>
      </li>`;
    document.getElementById("list").innerHTML += task;
    input.value = "";
  }

  deleteTask();
}
