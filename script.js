// Getting elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener for adding task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    } else {
        alert("Please enter a task!");
    }
});

// Function to add task to the list
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    
    const taskContent = document.createElement('p');
    taskContent.textContent = taskText;

    // Button to remove task
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Add click event to mark task as completed
    taskContent.addEventListener('click', () => {
        taskContent.classList.toggle('completed');
    });

    // Append the task content and remove button to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(removeBtn);

    // Append the task item to the task list
    taskList.appendChild(taskItem);
}
