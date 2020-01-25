const images = [{
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat"
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running"
    }
];

let gallery = document.querySelector("#gallery");

function createGallery(arr, list) {
    for (let obj of arr) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = obj.url;
        img.alt = obj.alt;
        img.classList.add("task3image");
        li.append(img);
        list.append(li);
        list.insertAdjacentHTML("afterbegin", '<ul id="gallery"></ul>');
    }
}
createGallery(images, gallery);