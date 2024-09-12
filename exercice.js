console.log("Exercice N1  \n")

let stock = [

    { name: "Laptop", category: "Electronics", quantity: 45 },
    { name: "Shoes", category: "Clothing", quantity: 150 },
    { name: "Phone", category: "Electronics", quantity: 30 },
    { name: "T-shirt", category: "Clothing", quantity: 80 },
    { name: "Fridge", category: "Electronics", quantity: 5 }
]

function totalItemByCategory(category){

    return stock
    .filter(item => item.category === category )
    .reduce((total , item) => total + item.quantity , 0)

}

console.log(totalItemByCategory("Clothing"))




console.log("function pour ajouter un produit")


function restockItem(itemName,quantityToAdd){ 

let item = stock.find(item => item.name === itemName); 

if (item){
    item.quantity += quantityToAdd
}

}

restockItem("Laptop" , 1)

console.log(stock[0].quantity)


console.log("Function pour les articles  a stock faible ")

function findLowStock(quantityOfStock){

let lowStockItem = stock.filter(item => item.quantity <= quantityOfStock

    
)

return lowStockItem

}
console.log(findLowStock(100))