let validationInput = document.querySelector("#validation-input");

function checkInput() {
    let value = validationInput.value;
    validationInput.classList.add("invalid");
    if (value.length == validationInput.dataset.length) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    }
}
validationInput.addEventListener("input", checkInput);