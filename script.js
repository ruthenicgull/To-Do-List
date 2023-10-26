const addButton = document.querySelector(".add-button")
const taskInputSection = document.querySelector('.task-input')
const todoList = document.querySelector('.list')
// const inputBar = document.getElementById('task-text')


function loadTaskInput() {
    return `
        <input
        type="text"
        class="task-input-text"
        name="task-text"
        id="task-text"
        placeholder="Enter task here"
        />
        <button class="task-input-button" onclick="onPlusButtonClick()">+</button>
    `
}

function addTask() {
    const inputBar = document.getElementById('task-text')
    let inputText = inputBar.value
    if(inputText == "") {
        alert("Please enter a task")
        return
    }

    let row = document.createElement('TR')
    row.classList.add('list-row')

    let textCell = document.createElement('TD')

    let checkbox = document.createElement('SPAN')
    checkbox.classList.add('list-row-checkbox')

    textCell.appendChild(checkbox)

    textCell.append(document.createElement('P').innerHTML = inputText)

    let deleteCell = document.createElement('TD')
    deleteCell.align = 'right'
    deleteCell.innerHTML = '<img src="images/delete_icon.png" class="delete-button" />'

    row.appendChild(textCell)
    row.appendChild(deleteCell)
    todoList.appendChild(row)
}

function onAddButtonClick() {
    taskInputSection.innerHTML = loadTaskInput()
}

function onPlusButtonClick() {
    addTask()
}

taskInputSection.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTask()
    }
})
