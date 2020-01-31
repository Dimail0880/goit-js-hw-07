const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ingredientsList = document.querySelector('#ingredients')
    // function createLi(arr, list) {
    //     for (let ingredient of arr) {
    //         let li = document.createElement('li')
    //         li.append(ingredient);
    //         list.insertAdjacentElement('beforeend', li)
    //     }
    // }
    // createLi(ingredients, ingredientsList)

function createLi(arr) {

    for (let ingredient of arr) {
        let li = document.createElement('li')
        li.append(ingredient);
    }

}
const list = createLi(ingredients)
console.log(list)
ingredientsList.append(list)


// ingredientsList.append(createLi(ingredients));
// createLi(ingredients, ingredientsList)

// function createLi(arr, list) {
//     for (let ingredient of arr) {
//         let li = document.createElement('li')
//         li.append(ingredient);
//         list.append(li);
//     }


// }