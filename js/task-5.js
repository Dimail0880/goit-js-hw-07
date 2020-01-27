let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец'
    } else {
        outputName.textContent = inputName.value
    }

})