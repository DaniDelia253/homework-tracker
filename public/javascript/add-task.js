async function newTaskHandler(event) {
    event.preventDefault();
  
    const task_text = document.querySelector('').value;
    const homework_id = document.querySelector('').value;
  
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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('').addEventListener('submit', newTaskHandler);