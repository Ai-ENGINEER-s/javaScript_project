console.log( "map method exercice ")


const prices = [100,200,300,500]

const discountPrices = prices.map((element )=>{
    return element *0.2
})


console.log(discountPrices)


// Exercice N2 



const ages  = [18,20,24,56,12,78]

const  personnesAgées = ages.filter((age)=>{

    if(age > 18){
        return age 
    }
    return ; 
} )

console.log(personnesAgées)


// exercice avec reduce 

console.log("calculer le produit de tous les elements en utilisant reduce  ")



const reduceTab = [1,2,3 , 4]

const reduceAppliction = reduceTab.reduce((acc , currentValue)=> acc *currentValue)

console.log(reduceAppliction)





