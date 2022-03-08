async function newFormHandler(event) {
  event.preventDefault();
  // let data = sessionStorage.getItem('loggedIn');
  // console.log(data)
  const title = document.querySelector('input[id="homeworkTitle"]').value;
  const homework_text = document.querySelector('input[id="homeworkText"]').value;
  const due_date = document.querySelector('input[id="dueDate"]').value;

  if (title && homework_text && due_date) {
    const response = await fetch(`/api/homework`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        homework_text,
        due_date,
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
  else {
    alert("Please fill the form all the way out!")
  }
}

document.querySelector('.newHomeworkForm').addEventListener('submit', newFormHandler);