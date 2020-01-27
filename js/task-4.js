// ТУТ НЕ СМОГ (

/* как я вижу решение:

- в каждой кнопке найти значение dataset.action (не могу достучаться до єтих значений((((
- на кнопки навесить addEventListener('click', event); - почему то тоже не могу повесить
 ( возможно Если бы у кнопок были айдишники, было бы легче, а так я не могу к ним достучаться)
- в функции event - проверять значение dataset.action - и исходя из этого запускать функцию
increment or decrement

PLEASE HELP )


-  */

let counterValue = parseInt(document.querySelector("#value").textContent)
let buttons = document.querySelectorAll('button')


function increment() {
    counterValue += 1
}

function decrement() {
    counterValue -= 1
}

// function event() {
//     if (buttons.dataset.action = 'increment') {
//         increment()
//     } else {
//         decrement()
//     }
// }

// buttons.addEventListener('click', event);
// window.addEventListener("DOMContentLoaded", event)