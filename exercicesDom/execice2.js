let numbers =[1,7,25,85,45]
numbers.forEach(num=>{
    console.log(num)
})




"Gestion des erreurs et debogage "

console.log("Gestion des erreurs et debogage en javaScript ")



let scores = [90, 85, null, "invalid", 76, 88, 100, undefined, 95]


function calculateAverage(scores){


    let validScores =  []

    scores.forEach((score, index)=>{


        try {
            if(typeof score === 'number' && !isNaN(score))
                validScores.push(score)
        }
        catch(error){



        }
    })

}



console.log("function flechées en javaScript ")




const add = (a ,b )=>{return a+b }


// function Timer(){
//     this.seconds = 0;
//     setInterval(()=>{
//         this.seconds++;
//         console.log(this.seconds)
//     },10)
// }

const squarredNumbers = numbers => numbers.map(n=>n*n)

console.log(squarredNumbers([1,2,3,4,5,6,7,8]))

const filterNames =  names => names.filter(name=> name.startsWith('A'))

console.log(filterNames(['Alice' , 'Bob' , 'Anna', 'John ']))

const sumArray = numbers => numbers.reduce((acc, curr)=>acc+curr, 0)
console.log(sumArray([1,7]))