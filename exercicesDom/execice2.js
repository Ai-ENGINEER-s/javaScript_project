let numbers =[1,7,25,85,45]
numbers.forEach(num=>{
    console.log(num)
})

let tab1 =[89,45,12,785]

tab1.forEach(tab1=>{
    console.log("\n" , tab1)
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


function Timer(){
    this.seconds = 0;
    setInterval(()=>{
        this.seconds++;
        console.log(this.seconds)
    },10)
}

const timer = new Timer()
const squareNumbers =  numbers => {
    squareNumbers**2
}

console.log(squareNumbers([1,2,3,4,]))