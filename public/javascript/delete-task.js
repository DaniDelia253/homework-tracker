
async function deleteTaskHandler(id) {
      const response = await fetch(`/api/task/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      document.location.replace('/');
    }
}

document.querySelectorAll('.delete-task-btn').forEach(item => {
    item.addEventListener('click', findId);
});

function findId(event) {
    if (event.target.dataset.id !== null) {
        const taskId = event.target.dataset.id;
        console.log(taskId);
        deleteTaskHandler(taskId);
    }
}

  
  