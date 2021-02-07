//Funcion completeTask

export function completeTask(){
    document.querySelectorAll('.listItem').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('taskComplete');
            item.classList.toggle('taskIncomplete');
        })
    })
}