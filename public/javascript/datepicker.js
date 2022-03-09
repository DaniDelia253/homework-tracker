const picker = datepicker('#dueDate', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})

const editPicker = datepicker('#editDueDate', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }
})

document.querySelector('#dueDate').addEventListener('click', picker);

document.querySelector('#editDueDate').addEventListener('click', editPicker);

