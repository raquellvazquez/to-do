/**
 * Function
 * @return void
 * select the elements of the class .listItem
 * and the click event is fired in which it adds a class.
 */
export function completeTask() {
  document.querySelectorAll(".listItem").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("taskComplete");
      item.classList.toggle("taskIncomplete");
    });
  });
}
