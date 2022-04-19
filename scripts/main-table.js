const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const formColumn = document.querySelector('.form-column');
const tableColumn = document.querySelector('.table-column');


export function mainTable() {
    editButtons.forEach(editButton => {
        editButton.addEventListener('click', () => {
            formColumn.classList.toggle('active');
            tableColumn.classList.toggle('active');
        });
    });
}