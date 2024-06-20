document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const newTaskInput = document.getElementById('new-task');
        const taskTimeInput = document.getElementById('task-time');
        const newTaskText = newTaskInput.value.trim();
        const taskTime = taskTimeInput.value;

        if (newTaskText !== '' && taskTime !== '') {
            const li = document.createElement('li');

            const taskContent = document.createElement('div');
            taskContent.className = 'task-content';

            const span = document.createElement('span');
            span.textContent = `${newTaskText} - ${new Date(taskTime).toLocaleString()}`;
            taskContent.appendChild(span);

            const buttonsDiv = document.createElement('div');

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.className = 'done-btn';
            doneButton.addEventListener('click', markAsDone);
            buttonsDiv.appendChild(doneButton);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', () => editTask(li, newTaskText, taskTime));
            buttonsDiv.appendChild(editButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('click', removeTask);
            buttonsDiv.appendChild(removeButton);

            taskContent.appendChild(buttonsDiv);
            li.appendChild(taskContent);

            taskList.appendChild(li);
            newTaskInput.value = '';
            taskTimeInput.value = '';
        }
    }

    function markAsDone(e) {
        const li = e.target.closest('li');
        li.classList.toggle('done');
    }

    function removeTask(e) {
        const li = e.target.closest('li');
        taskList.removeChild(li);
    }

    function editTask(li, oldText, oldTime) {
        const newTaskText = prompt('Edit task:', oldText);
        const newTaskTime = prompt('Edit time (yyyy-mm-ddThh:mm):', oldTime);

        if (newTaskText !== null && newTaskText.trim() !== '' && newTaskTime !== null && newTaskTime.trim() !== '') {
            li.querySelector('span').textContent = `${newTaskText.trim()} - ${new Date(newTaskTime.trim()).toLocaleString()}`;
        }
    }
});
