const picker = datepicker('#dueDate', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})

<<<<<<< HEAD
const pickerTwo = datepicker('#editDueDate', {
=======
const editPicker = datepicker('#editDueDate', {
>>>>>>> 0d57a9ccf4eb8f0e527f30739edfe764dccae300
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})
<<<<<<< HEAD

document.querySelector('#editDueDate').addEventListener('click', pickerTwo);
document.querySelector('#dueDate').addEventListener('click', picker);
=======

document.querySelector('#dueDate').addEventListener('click', picker);

document.querySelector('#editDueDate').addEventListener('click', editPicker);

>>>>>>> 0d57a9ccf4eb8f0e527f30739edfe764dccae300
