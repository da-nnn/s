document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskInput = document.getElementById('new-task');
        const reminderInput = document.getElementById('task-reminder');
        const taskText = taskInput.value;
        const reminderTime = reminderInput.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
        reminderInput.value = '';

        if (reminderTime !== '') {
            const reminderDate = new Date(reminderTime);
            const now = new Date();
            const timeToReminder = reminderDate.getTime() - now.getTime();

            if (timeToReminder > 0) {
                setTimeout(() => {
                    alert(`Reminder: ${taskText}`);
                }, timeToReminder);
            }
        }
    });
});
