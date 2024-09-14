function calculateurtax(income){


let   tax = 0.0 ;

if(income <=10000){
 
    console.log("And your tax is : " + {tax})
}

if(income>= 10001 && income <=30000 ) {

tax = (income * 10) / 100


console.log("And your tax is : " + {tax})
}
if (income >= 30001  && income<= 60000){

    tax = (income * 20) / 100
    
    console.log("And your tax is : " + {tax})
}
if (income >=60001){

    tax = (income * 30) / 100
    
    console.log("And your tax is : " + {tax})
}


return tax 


}

const barryIncome = 10001

console.log(calculateurtax(barryIncome))