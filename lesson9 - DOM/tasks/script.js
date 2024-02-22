const tasks = document.querySelector(".tasks");

function add() {
    const input = document.querySelector('input');

    if (!input.value) {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = input.value;
    li.addEventListener('click', removeTask);

    tasks.appendChild(li);
    input.value = '';
}

function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
    }
}

function removeTask(ev) {
    const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${ev.target.innerHTML}?`);

    if (isAllowed) {
        ev.target.remove();
    }
}