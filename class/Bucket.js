class shopCart {
    constructor(items) {
        this.items = items;
        this.cartClass = "shopCart"
        this.buttonClassPlus = "plus"
        this.buttonClassMinus = "minus"
        this.buttonClassDelete = "delete"
        this.currency = '$'
    }


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
        td.append(deleteButton)
        tr.append(td)
        
/////ARTICLE IMAGE//////
        td = document.createElement("td")
        const articleImage = document.createElement('img')
        articleImage.setAttribute(`src`, dataRef.image)
        td.append(articleImage)
        tr.append(td)
/////////ARTICLE NAME////////
td = document.createElement('td')
const articleName = document.createElement("h4")
articleName.innerHTML = dataRef.name
td.append(articleName)
tr.append(td)

/////MINUS BUTTON///////
td = document.createElement("td")
const minusButton = document.createElement("button")
minusButton.innerHTML = "-"
minusButton.setAttribute('data-articul', key)
minusButton.classList.add(this.buttonClassMinus)
minusButton.classList.add("button-primary")
td.append(minusButton)
tr.append(td)

////QUANTITY////
td = document.createElement("td")
const articleQuantity = document.createElement("span")
articleQuantity.innerHTML = dataRef.count
td.append(articleQuantity)
tr.append(td)

/////PLUS BUTTON/////
td = document.createElement("td")
const plusButton = document.createElement("button")
plusButton.textContent = "+"
plusButton.classList.add(this.buttonClassPlus)
plusButton.classList.add("button-primary")
plusButton.setAttribute('data-articul', key)
td.append(plusButton)
tr.append(td)

/////AN ARTICLE'S PRICE//////
td = document.createElement('td')
const price = document.createElement('span')
price.innerHTML = dataRef.price * dataRef.count
td.append(price)
tr.append(td)

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
    console.log(totalPrice);
    tdTotal.append(totalPrice)
    trTotal.append(tdTotal)
    table.append(trTotal)
return table
}

}



