 console.log("feches function in javaScript let's get started ")


 function add(a, b) {
    return a +b 
 }


console.log(add(89,78))






console.log("Filter function in JavaScript ")

let numbers = [1,8,96,45]

let namesForStudents = ["Barry", "Sankara", "BAOBAB"]

let selectNames = namesForStudents.filter(name =>name.endsWith("b"))

console.log(selectNames)


let numbersDouble = numbers.filter(numb=>numb %2 ==0)

console.log(numbersDouble)

console.log("Reduce function in javaScript . the goal of this function is to reduce an array to one value by appling an accumulation function")



let tab1 = [ 1, 2, 4, 5] 

let sum = tab1.reduce((accumulator , currentValue) => accumulator + currentValue , 0) ; 

console.log(sum)

console.log("find function in javaScript ")

let users = [

    {name:'John ', age:25},

    {name: 'Jane', age:30}
]


let user = users.find(user=>user.name == 'Jane')

console.log(user)

console.log("set time function . It's function that run a value after certain time  ")

setTimeout(()=>{

    console.log("Ce message s'affiche après 3 seconde")
} , 5000)



console.log("addEventListener() . The function addEventListener is used to attach an event to an element .it takes 2 parameters ")


// let buttton = document.getElementById("My button");

// buttton.addEventListener("click", ()=>{

//     alert('Bouton get clicked')
// })


console.log("try , and catch function using in javaScript ")

try {

    let result = someUndefinedFunction(); 
}catch(error){

    console.log("Une erreur s'est produite",error.message)
}

try {
    var value1 = 785
   const  value2 = 'Barry sanoussa '
   value2 =78

   console.log(value1 + value2)



}catch(error) {
console.log(error.message)
}