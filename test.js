" Listes and objects "
let fruits = [ "pomme " , "Banane ","orange"]

" chaque element have an index"

console.log(fruits[0])
console.log(fruits[2])


"modifier les elements du tableau "

fruits[1 ]= "Fraise"

console.log(fruits[1])


"Methodes courantes des tableaux "

 " push method  this methohd is used to add an element int the array "
 fruits.push("Mangue")

 console.log(fruits)

 " delete an element in the array we use pop methode "


 console.log("add an element to the beginning of the array using unshift method ")


 fruits.unshift('Citron')

console.log(fruits)

console.log("drop the first element in array in javaScript using shift method ")


fruits.shift(); 

console.log(fruits)

console.log("find the length of the array in javaScript ")

console.log(fruits.length)

console.log("loop in array in javaScript ")


for(let i =0; i<=fruits.length ; i++){
    console.log(fruits[i])
}



console.log("let use for each method ")

fruits.forEach(function(fruit){
console.log(fruit)


})

let tab = [45,78,56,89,852]

console.log("for each method again ")
tab.forEach(function(tab1){
    console.log(tab1)
})



console.log("Objects in javaScrit . \n What is an object in javaScript ? \n  An object refered a collection of properties  in javaScript , each property hava key and value  ")


console.log("let's create our first object in javaScript ")


let personne = { 



    prenom: "Sanoussa", 
    nom : "Barry " , 
    age : 63, 
    salutation : function (){console.log("Bonjour je sui " + this.prenom + "" + this.nom)}
} 
; 



console.log("Acceder aux propriétées de l'objet \n we can get accessed to the property of an object in javaScript by using dot or just calibraces\n  ")


console.log(personne.prenom)
console.log(personne["nom"])


console.log("modify a property in an object in javaScript ")

personne.age = 35 


console.log("New age of the person  : ")
console.log(personne.age)

console.log("add a new property to our object ")

personne.nationalité = "Burkinabé "

console.log(personne.nationalité)

console.log("Method in objects in javaScripts")


console.log("to get accessed to all properties of an object ")

for(let cle in personne ){ 

    console.log(cle + " : " + personne[cle])
}


for(let key in personne) { 

    console.log(key  + " : " +  personne[key])
}


console.log("array of objects . \n You can combine objects and array to create an array of object")

let etudiants = [ 


    {nom : "Alice " , age : 20},
    {nom : "Ali " , age : 28},
    {nom : "Alic " , age : 24},
    {nom : "Alicer " , age : 27}
]


etudiants.forEach(function(etudiant){


    console.log(etudiant.nom + "a " + etudiant.age + "ans ")
})