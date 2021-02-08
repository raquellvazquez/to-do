/**
 * Function
 * @return void
 * assigns to each <li> button's .close class the click event which removes the element
 * and if there is no element in the list it shows the text "No Task"
 */

export function deleteTask() {
  var close = document.getElementsByClassName("close");

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var taskToDelete = this.parentElement;
      document.querySelector("#list").removeChild(taskToDelete);
      var countUl = document.getElementById("list").childElementCount;
      if (countUl === 0) {
        document.querySelector(`#noTask`).classList.remove("no-task-none");
        document.querySelector(`#noTask`).classList.add("noTask");
        document.querySelector(`#noTask`).innerText = "No Task.";
      }
    };
  }
}
