let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
    return inputName.value === '' ? outputName.textContent = 'незнакомец' : outputName.textContent = inputName.value
})