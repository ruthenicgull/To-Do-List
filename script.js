const taskInputSection = document.querySelector('.task-input')
const todoList = document.querySelector('.list')
const inputBar = document.getElementById('task-text')

function createTaskHTML(row, taskText) {
    let textCell = document.createElement('TD')

    let checkbox = document.createElement('SPAN')
    checkbox.classList.add('list-row-checkbox')

    textCell.appendChild(checkbox)

    textCell.append(document.createElement('P').innerHTML = taskText)

    let deleteCell = document.createElement('TD')
    deleteCell.align = 'right'
    deleteCell.innerHTML = '<img src="images/delete_icon.png" class="delete-button" />'

    row.appendChild(textCell)
    row.appendChild(deleteCell)
    todoList.appendChild(row)
}

function addTask() {

    let inputText = inputBar.value

    if(inputText == "") {
        alert("Please enter a task")
        return
    }

    let row = document.createElement('TR')
    row.classList.add('list-row')

    createTaskHTML(row, inputText)

    deleteTask(row)
}

function deleteTask(row) {
    const deleteButton = row.querySelector('.delete-button')
    deleteButton.addEventListener('click', () => {
        row.remove()
    })
}

function onPlusButtonClick() {
    addTask()
}

taskInputSection.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask()
    }
})
