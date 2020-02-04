let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
    outputName.textContent = inputName.value === '' ? 'незнакомец' : inputName.value
})