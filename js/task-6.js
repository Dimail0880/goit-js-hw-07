let validationInput = document.querySelector("#validation-input");

function checkInput() {
    let value = validationInput.value;
    if (value.length != validationInput.dataset.length) {
        validationInput.classList.add("invalid");
    } else {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    }
}

validationInput.addEventListener("input", checkInput);