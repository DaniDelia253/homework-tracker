const picker = datepicker('#dueDate', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})

const pickerTwo = datepicker('#editDueDate', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})

document.querySelector('#editDueDate').addEventListener('click', pickerTwo);
document.querySelector('#dueDate').addEventListener('click', picker);
