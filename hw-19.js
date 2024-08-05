document.addEventListener('DOMContentLoaded', () => {
    // Завадння 1-2
    const refs = {
        openModal: document.querySelector('[data-action="open-modal"]'),
        closeModal: document.querySelector('[data-action="close-modal"]'),
        backdrop: document.querySelector('.js-backdrop'),
    };


    refs.openModal.addEventListener('click', onOpenModal);
    refs.closeModal.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);

    function onOpenModal() {
        document.body.classList.add('show-modal');
    }

    function onCloseModal() {
        document.body.classList.remove('show-modal');
    }

    function onBackdropClick(event) {
        if(event.currentTarget = event.target){
            onCloseModal()
        }
    }
     // Завадння 3
const inputBtn = document.querySelectorAll('input');

    inputBtn.forEach(inputBtn => {
        inputBtn.addEventListener('click', onChooseColorBtn);
    });
function onChooseColorBtn (event){
    const body = document.querySelector('body');
    body.style.backgroundColor = event.target.value;
}

// Завдання 4

    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    nameInput.addEventListener('input', () => {
        nameOutput.textContent = nameInput.value.trim() === '' ? 'незнайомець' : nameInput.value;
    });
// Завдання 5
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);
    if (validationInput.value.length === requiredLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
    
// Завдання 6
    const fontSizeControl = document.querySelector('#font-size-control');
    const text = document.querySelector('#text');

    fontSizeControl.addEventListener('input', () => {
        text.style.fontSize = `${fontSizeControl.value}px`;
    });
});

});

