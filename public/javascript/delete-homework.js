<<<<<<< HEAD
async function deleteFormHandler(event, homeworkId) {


  const response = await fetch(`/api/homework/${homeworkId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
=======
async function deleteFormHandler(id) {
    const response = await fetch(`/api/homework/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
>>>>>>> 6e857b140809bdce0ab2b996c2ebdc53155ef392
}

document.querySelectorAll('.complete-homework-btn').forEach(item => {
  item.addEventListener('click', (event) => {
    console.log(event)
    homeworkId = event.target.dataset.id
    console.log(homeworkId)
    deleteFormHandler(homeworkId)
  });
});
