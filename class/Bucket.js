class shopCart {
    constructor(items) {
        this.items = items;
        this.cartClass = "shopCart"
        this.buttonClassPlus = "plus"
        this.buttonClassMinus = "minus"
        this.buttonClassDelete = "delete"
        this.currency = '$'
    }

    ///Cart Functions///
plusOne(articul) {
    this.items[articul].count++
}

minusOne(articul) {
    if(this.items[articul]["count"] - 1 === 0) {
        this.deleteOne(articul);
    } else {
        this.items[articul]["count"]--
    }

}

deleteOne(articul) {
delete this.items[articul]
}


getTotal() {
    let total = 0
    for(let key in this.items) {
    total+= this.items[key]['price'] * this.items[key]['count']
    }
    return total
}

///APPEND CREATE ELEMENT/// 
append(td,tr, newEl) {
    td.append(newEl)
tr.append(td)
}

render() {
    
    const table = document.createElement("table")
    table.classList.add(this.cartClass)
    for(let key in this.items) {
        const dataRef = this.items[key]
        const tr = document.createElement("tr")

////DELETE BUTTON/////
        let td = document.createElement("td")
        const deleteButton = document.createElement("button")
        deleteButton.textContent = 'X'
        deleteButton.classList.add(this.buttonClassDelete)
        deleteButton.classList.add("button-primary")
        deleteButton.setAttribute('data-articul', key)
        this.append(td, tr, deleteButton)
        
/////ARTICLE IMAGE//////
        td = document.createElement("td")
        const articleImage = document.createElement('img')
        articleImage.setAttribute(`src`, dataRef.image)
        this.append(td,tr, articleImage )
/////////ARTICLE NAME////////
td = document.createElement('td')
const articleName = document.createElement("h4")
articleName.innerHTML = dataRef.name
this.append(td,tr,articleName)

/////MINUS BUTTON///////
td = document.createElement("td")
const minusButton = document.createElement("button")
minusButton.innerHTML = "-"
minusButton.setAttribute('data-articul', key)
minusButton.classList.add(this.buttonClassMinus)
minusButton.classList.add("button-primary")
this.append(td,tr,minusButton)

////QUANTITY////
td = document.createElement("td")
const articleQuantity = document.createElement("span")
articleQuantity.innerHTML = dataRef.count
this.append(td,tr,articleQuantity)

/////PLUS BUTTON/////
td = document.createElement("td")
const plusButton = document.createElement("button")
plusButton.textContent = "+"
plusButton.classList.add(this.buttonClassPlus)
plusButton.classList.add("button-primary")
plusButton.setAttribute('data-articul', key)
this.append(td,tr,plusButton)

/////AN ARTICLE'S PRICE//////
td = document.createElement('td')
const price = document.createElement('span')
price.innerHTML = dataRef.price * dataRef.count + this.currency
this.append(td,tr,price)
////APPENDING CREATED CART TABLE//////
table.append(tr)
}

/////FULL TOTAL/////
    let tdTotal = document.createElement("td")
    let trTotal = document.createElement('tr')
    tdTotal.setAttribute('colspan', 8)
    tdTotal.style.textAlign = "right"
    const totalPrice = document.createElement('span')
    totalPrice.classList.add('total')
    totalPrice.innerHTML = `<b>Total:</b>${this.getTotal() + this.currency}`
    this.append(tdTotal,trTotal, totalPrice)
    table.append(trTotal)
return table
}

}



