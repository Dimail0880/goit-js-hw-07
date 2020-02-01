const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

let ingredientsList = document.querySelector('#ingredients')


function createLi(el) {

    let li = document.createElement('li')
    li.append(el);
    return li
}


let list = ingredients.map(item => createLi(item))
ingredientsList.append(...list)