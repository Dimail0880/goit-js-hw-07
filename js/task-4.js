let counterValue = 0;
let counter = document.querySelector("#value");
let plusBtn = document.querySelector('[data-action=increment]')
let minusBtn = document.querySelector('[data-action=decrement]')

function increment() {
    counter.textContent = counterValue += 1
}

function decrement() {
    counter.textContent = counterValue -= 1
}

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement)