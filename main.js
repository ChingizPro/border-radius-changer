const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const box = document.querySelector('.box');

const changeBorderRadius = (corner, inputValue) => {
    let property = `border${corner}Radius`;
    let value = `${inputValue}px`;
    box.style[property] = value;
}

input1.addEventListener('input', () => changeBorderRadius('TopLeft', input1.value));
input2.addEventListener('input', () => changeBorderRadius('TopRight', input2.value));
input3.addEventListener('input', () => changeBorderRadius('BottomLeft', input3.value));
input4.addEventListener('input', () => changeBorderRadius('BottomRight', input4.value));