console.log("Exercice N1  \n")

let stock = [

    { name: "Laptop", category: "Electronics", quantity: 45 },
    { name: "Shoes", category: "Clothing", quantity: 150 },
    { name: "Phone", category: "Electronics", quantity: 30 },
    { name: "T-shirt", category: "Clothing", quantity: 80 },
    { name: "Fridge", category: "Electronics", quantity: 5 }
]




console.log("Crée une fonction totalItemsByCategory qui prend la catégorie en entrée (ex : Electronics) et retourne le nombre total d’articles pour cette catégorie. \n ")

function totalItemsByCategory(category){

    return stock.filter(
    item => item.category === category
    )
    .reduce(
      ( total , item  ) => total += item.quantity , 0
    )
}


console.log(totalItemsByCategory('Electronics'))


console.log("Crée une fonction restockItem qui prend le nom d’un produit et un nombre à ajouter, puis met à jour la quantité de ce produit dans le stock.\n")

function restockItem(itemName , quantityToAdd){

    let item = stock.find(item => item.name=== itemName)
    if (item){
   
      item.quantity += quantityToAdd

    }

}


restockItem("Phone", 89)

console.log((stock[2].quantity))


console.log("Crée une fonction findLowStock qui retourne un tableau contenant tous les produits dont la quantité est inférieure à 20.")


function  findLowStock(lowStockItem){

  return stock.filter(
    item => item.quantity <=lowStockItem
  )


}

console.log(findLowStock(100))