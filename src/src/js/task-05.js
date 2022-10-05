const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const inputHandle = () => {
    if (inputElement.value.length > 0) {
        outputElement.textContent = inputElement.value;
        // return;
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputElement.addEventListener('input', inputHandle);