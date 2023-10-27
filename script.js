const taskInputSection = document.querySelector('.task-input')
const todoList = document.querySelector('.list')
const inputBar = document.getElementById('task-text')
const tasksCompletedCount = document.querySelector('.tasks-completed-count')

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
    inputBar.value = ""
    inputBar.value = ""
    if(inputText == "") {
        alert("Please enter a task")
        return
    }

    let row = document.createElement('TR')
    row.classList.add('list-row')
    row.setAttribute('data', 'incomplete')
    row.setAttribute('data', 'incomplete')

    createTaskHTML(row, inputText)
    deleteTask(row)
    checkTask(row)
    deleteCompletedTasks()

    saveTasks()
}

function deleteTask(row) {
    const deleteButton = row.querySelector('.delete-button')
    deleteButton.addEventListener('click', () => {
        row.remove()
        saveTasks()
    })
    saveTasks()
}
 
function checkTask(row) {
    const checkbox = row.querySelector('.list-row-checkbox')
    checkbox.addEventListener('click', () => {
        row.setAttribute('data', 'completed')
        row.setAttribute('data', 'completed')
        checkbox.style.backgroundColor = 'green'
        row.childNodes[0].style.textDecoration = 'line-through'
        row.childNodes[0].style.color = 'darkgrey'
        row.childNodes[0].style.color = 'darkgrey'
        row.style.backgroundColor = 'black'
        saveTasks() 
        saveTasks() 
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

function deleteCompletedTasks() {
    const deleteDoneTasksButton = document.querySelector('.del-done-tasks')
    deleteDoneTasksButton.addEventListener('click', () => {
        for(let i = 0; i < todoList.children.length; i++)
        {
            if(todoList.children[i].getAttribute('data') === 'completed') {
                todoList.children[i].remove()
            }
        }
        saveTasks()
    })
}

function saveTasks() {
    localStorage.setItem('tasks', todoList.innerHTML)
}

function loadTasks() {
    todoList.innerHTML = localStorage.getItem('tasks')
    const rows = document.querySelectorAll('.list-row')
    rows.forEach((row)=>{
        deleteTask(row)
        checkTask(row)
        deleteCompletedTasks()
        if(row.getAttribute('data') === 'completed') {
            let checkbox = row.querySelector('.list-row-checkbox')
            checkbox.style.backgroundColor = 'green'
            row.childNodes[0].style.textDecoration = 'line-through'
            row.childNodes[0].style.color = 'darkgrey'
            row.style.backgroundColor = 'black'
        }
    })
}

loadTasks()