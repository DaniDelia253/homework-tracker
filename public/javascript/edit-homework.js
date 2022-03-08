let id = "c"

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[id="editHomeworkTitle"]').value;
    const homework_text = document.querySelector('input[id="editHomeworkText"]').value;
    const due_date = document.querySelector('input[id="editDueDate"]').value;

    const response = await fetch(`/api/homework/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        homework_text,
        due_date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelectorAll('.edit-homework-btn').forEach(item => {
    item.addEventListener('click', (event) => {
      id = event.target.dataset.id
    })
  });

  document.querySelector('.editHomeworkForm').addEventListener('submit', editFormHandler);