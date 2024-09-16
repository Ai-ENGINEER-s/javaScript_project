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
    

const incomeValue = document.getElementById("incomeValue")


const taxBouton = document.getElementById("taxButton")

const list = document.getElementById("list")

taxBouton.addEventListener("click" , function(){

let income =parseInt(incomeValue.textContent)

let tax = calculateurtax(income)


const taxBalise = document.createElement('li')

taxBalise.textContent = tax 

const incomeBalise = document.createElement('li')

incomeBalise.textContent = income 

const nouvelleTaxIcome = document.createElement('li')


nouvelleTaxIcome.appendChild(incomeBalise)
nouvelleTaxIcome.appendChild(taxBalise)

list.appendChild(nouvelleTaxIcome)

incomeValue.value = ""



   
    




})



