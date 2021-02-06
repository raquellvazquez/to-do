import { deleteTask } from "./deleteTask.js";

export function addTask() {
  let inputValue = document.getElementById("input").value;

  if(inputValue === "") {
    alert("Please add a new task");
  } else {
    let task = `
      <li>
      <input class='checkbox' type='checkbox'>
      <p class='nameTask'>
      ${inputValue} 
      </p> 
      <button class='close' type='button'>Eliminar</button>
      </li>`;
    document.getElementById("list").innerHTML += task;
    var li = document.getElementsByTagName("li");
    
    for(var i= 0; i < li.length ; i++) {
      li[i].setAttribute('style', `display: flex; 
                                  justify-content: space-around; 
                                  align-items: center; width: 700px; 
                                  height: 50px; 
                                  background: rgb(255, 255, 255); 
                                  border: 1px solid rgb(234, 240, 247); 
                                  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.3); 
                                  border-radius: 10px; margin: 16px`);
    }
    var pElement = document.getElementsByClassName("nameTask");

    for(var i= 0; i < pElement.length ; i++) {
      pElement[i].setAttribute('style', 'margin: 0; font-size: 1.5em');
    }
    input.value = "";
  }

  deleteTask();
}
