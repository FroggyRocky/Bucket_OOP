const cartInitialData = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "./pictures/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./pictures/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "./pictures/63553250_images_9154502355.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./pictures/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./pictures/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "url": "#",
        "image": "./pictures/6533206_images_1657626044.jpg",
        "price": 2416.00
    }
}

////////////// RENDER (DRAW) ARTICLES /////////////////////////////////////////

const container = document.querySelector(".goods-container")
let createdObj = `<div class = "goods-list-container pricing-table row">`

for (key in cartInitialData) {

    createdObj += `<div class = "article-container col col-md-6 col-lg-4">`
    createdObj += `<div class = "article-information-container package featured">`
    createdObj += `<h2 class = "article-name">${cartInitialData[key]["name"]}</h2>`
    createdObj += `<img class = "article-image" src="${cartInitialData[key]["image"]}" alt="watche's-picture">`
    createdObj += `<p class = "article-price price">${cartInitialData[key]["price"] + "$"}</p>`
    createdObj += `<button class="add-to-cart button-primary" data-articul="${key}">В Корзину</button>`
    createdObj += `</div>`
    createdObj += `</div>`
}

container.innerHTML = createdObj;

const addData = {}; // - DATA OF ADDED (CLICKED) ARTICLES 




/////////////////////ADDING DATA TO "addData" BY CLICK////////////////////////////
const btn = document.querySelectorAll(".add-to-cart")

btn.forEach((item) => {
    item.addEventListener("click", function () {
        let targetKey = event.target.dataset.articul
        let dataClicked = cartInitialData[targetKey]

        if (!addData[targetKey]) {
            console.log("not found");
            addData[targetKey] = dataClicked;
            addData[targetKey]["count"] = 1;
        } else if (addData[targetKey]) {
            addData[targetKey]["count"]++
        }
        localStorage.setItem("cartData", JSON.stringify(addData))
    })
})




