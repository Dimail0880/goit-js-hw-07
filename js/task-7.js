let dynamicFontSizeBar = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

function changeFontSize() {
    text.style.fontSize = dynamicFontSizeBar.value + "px";
}
dynamicFontSizeBar.addEventListener("click", changeFontSize);