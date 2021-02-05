export function addTask() {
  let inputValue = document.getElementById("input").value;
  let task = `
    <li>
    <input class='checkbox' type='checkbox'>
    <p>
    ${inputValue} 
    </p> 
    <button class='eliminar' type='button'>Eliminar</button>
    </li>`;

  document.getElementById("list").innerHTML += task;
  input.value = "";
}
