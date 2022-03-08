async function deleteFormHandler(event, homeworkId) {


  const response = await fetch(`/api/homework/${homeworkId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.complete-homework-btn').addEventListener('click', deleteFormHandler);


document.querySelectorAll('.complete-homework-btn').forEach(item => {
  item.addEventListener('click', (event) => {
    console.log(event)
    homeworkId = event.target.dataset.id
    console.log(homeworkId)
    deleteFormHandler(event, homeworkId)
  });
})
