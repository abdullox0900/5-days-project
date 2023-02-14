const elList = document.querySelector(".list");

const API_KEY = "NjXfY5kc8FvYvy8vqWB4pFHwwCQR17TtmkQj9AEiksY";
const apiUrl = `https://api.unsplash.com/photos?client_id=${API_KEY}`;

let loader = `<div class="loader">
                <img src="./img/631c400b903c03d9-loading-gif-wpfaster.gif" alt="loader-gif">
            </div>`;

elList.innerHTML = loader;

try {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        elList.innerHTML = "";
        data.map((item) => {
            const elItem = document.createElement("li");
            elItem.classList.add(".list__item");
            elItem.innerHTML = `
                    <img class="list__item-img" src=${item?.urls?.regular} alt="unsplash-img">
                    <div class="list__item-name"></div>
                `;
            elList.append(elItem);
        });
    })

} catch (err) {
    console.log(`${err} Xato`);
}
