async function deleteFormHandler(id) {
    const response = await fetch(`/api/homework/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}

document.querySelectorAll('.complete-homework-btn').forEach(item => {
  item.addEventListener('click', (event) => {
    console.log(event)
    homeworkId = event.target.dataset.id
    console.log(homeworkId)
    deleteFormHandler(homeworkId)
  });
});
