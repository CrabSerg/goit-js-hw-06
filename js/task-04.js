let counterValue = document.querySelector('#value');

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);