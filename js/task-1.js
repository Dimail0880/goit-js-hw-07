const categories = document.querySelector("#categories");
console.log(`В списке ${categories.childElementCount} категории.`);

const items = document.querySelectorAll(".item");
items.forEach.call(items, el => {
    const title = el.querySelector("h2").innerHTML;
    const itemsLength = el.querySelectorAll("li").length;
    console.log(`Категория: ${title}. Количество элементов: ${itemsLength}.`);
});