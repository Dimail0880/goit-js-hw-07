const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ingredientsList = document.querySelector('#ingredients')

function createLi(arr, list) {
    for (let ingredient of arr) {
        let li = document.createElement('li')
        li.append(ingredient);
        list.append(li);
    }


}
createLi(ingredients, ingredientsList)