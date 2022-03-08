<<<<<<< HEAD
async function deleteFormHandler(event, homeworkId) {
  event.preventDefault();


  const response = await fetch(`/api/homework/${homeworkId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
=======
async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/homework/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
>>>>>>> dev/zane
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
