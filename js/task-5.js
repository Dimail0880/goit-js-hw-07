let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
    inputName.value === '' ? outputName.textContent = 'незнакомец' : outputName.textContent = inputName.value
})
