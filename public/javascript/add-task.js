let homeworkId = "w"

async function newTaskHandler(event) {
  event.preventDefault();

  const task_text = document.querySelector('#taskText').value;
  const homework_id = homeworkId

  const response = await fetch(`/api/task`, {
    method: 'POST',
    body: JSON.stringify({
      task_text,
      homework_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log(response)
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelectorAll('.addTaskBtn').forEach(item => {
  item.addEventListener('click', (event) => {
    console.log(event)
    homeworkId = event.target.dataset.id
    console.log(homeworkId)
  });
})

document.querySelector('.newTaskForm').addEventListener('submit', newTaskHandler);