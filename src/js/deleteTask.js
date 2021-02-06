export function deleteTask() {
    var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var taskToDelete = this.parentElement;
            document.querySelector('#list').removeChild(taskToDelete);
        }
    }
}
