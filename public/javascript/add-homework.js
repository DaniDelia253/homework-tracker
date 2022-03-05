async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="homework-title"]').value;
    const homework_text = document.querySelector('input[name="homework-text"]').value;
  
    const response = await fetch(`/api/homework`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        homework_text
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
  
  document.querySelector('.new-homework-form').addEventListener('submit', newFormHandler);