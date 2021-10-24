
if(localStorage.getItem('cartData')) {
////RENDERING/////
    const cartOut = document.querySelector(".cart-bucket")
    const cartData = JSON.parse(localStorage.getItem('cartData'))
    const shopCart1 = new shopCart(cartData)
    cartOut.innerHTML = '';
    cartOut.append(shopCart1.render())

////FUNCTIONALITY/////
cartOut.addEventListener("click", function(){
    const {classList, dataset} = event.target

   if(classList.contains('delete')) {
       console.log("delete");
       shopCart1.deleteOne(dataset['articul'])
       cartOut.innerHTML = ""
       cartOut.append(shopCart1.render());
       localStorage.setItem('cartData', JSON.stringify(shopCart1.items))
   } 
   else if (classList.contains("minus")) {
       shopCart1.minusOne(dataset['articul'])
       cartOut.innerHTML = '';
       cartOut.append(shopCart1.render())
       localStorage.setItem('cartData', JSON.stringify(shopCart1.items))
   }
   else if (classList.contains('plus')) {
       shopCart1.plusOne(dataset['articul'])
       cartOut.innerHTML = '';
       cartOut.append(shopCart1.render())
       localStorage.setItem('cartData', JSON.stringify(shopCart1.items))
   }
})
}
