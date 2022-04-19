const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const container = document.querySelector('.container');


export function mainTable() {
    editButtons.forEach(editButton => {
        editButton.addEventListener('click', () => {
            container.classList.toggle('active');
        });
    });
}