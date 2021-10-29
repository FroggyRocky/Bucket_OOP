

///RENDERING///
if (localStorage.getItem('cartData')) {
    const cartOut = document.querySelector(".cart-bucket")
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const shopCart1 = new shopCart(cartData)
    refresh(cartOut, shopCart1)

    ///FUNCTIONALITY///

    cartOut.addEventListener("click", function () {
        const { classList, dataset } = event.target

        if (classList.contains('delete')) { ///Delete///
            console.log("delete");
            shopCart1.deleteOne(dataset['articul'])
            refresh(cartOut, shopCart1, 'cartData')
        }
        ///MINUS///
        else if (classList.contains("minus")) {
            shopCart1.minusOne(dataset['articul'])
            refresh(cartOut, shopCart1, 'cartData')
        }
        ///PLUS///
        else if (classList.contains('plus')) {
            shopCart1.plusOne(dataset['articul'])
            refresh(cartOut, shopCart1, 'cartData')

        }
    })
}



///RERENDER CART AND REFRESH DATA///
function refresh(renderPlace, cartObj, cartLocalData) {
    renderPlace.innerHTML = ""
    renderPlace.append(cartObj.render());
    localStorage.setItem(cartLocalData, JSON.stringify(cartObj.items))
}


