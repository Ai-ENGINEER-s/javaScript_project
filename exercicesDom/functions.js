console.log("JavaScript provides a lot of method for data manipulation . these methodes are used in array a a lot so if you wanna be an expert in the web you have to master it . \n")


// Frist methode is map()

console.log("Map method is used to create a new array by applying a function to each element of an  existed array ")



// map method take three parameters , element , index ,existedArray 



// const newArray = array.map((element , index , array)=> {return some value for new array })


const existedTable  = [ 1,2,3,4,5,6,7,8,9]

const squarredNumbersOfExistedTableUsingMapMethod =  existedTable.map((elementOfExistedTable, index,existedTable)=>{

    if(index===2){
        elementOfExistedTable *= elementOfExistedTable

return elementOfExistedTable
    
    }else {    return elementOfExistedTable ; 

    }



}


)

console.log(squarredNumbersOfExistedTableUsingMapMethod + "\n")




console.log("Filter method . In javaScript filter method is used to filter the elements of an array according to the creteria of the define function ")


// syntax of filter method in javaScript 



// const newArray = array.filter((element , index , array )=> {   return true or false })



console.log("An example of filter method in javaScript ")

const numbers = [ 5,6,8]

const envenNumbers = numbers.filter((num)=>{

    if(num % 2 ===0){
        return num 
    }
    return ; 
})

console.log(envenNumbers)


// Now let's see reduce () method applying to array 


console.log( "reduce methode is to reduce an array to an one value by applying a cumulative function on the elements of the array \n")


// const result =  array.reduce((accumulator , currentValue , index , array ))








