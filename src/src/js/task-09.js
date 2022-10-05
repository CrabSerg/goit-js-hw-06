function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.body;
const buttonElement = document.querySelector('.change-color');
const colorElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  colorElement.textContent = bodyElement.style.backgroundColor;
});