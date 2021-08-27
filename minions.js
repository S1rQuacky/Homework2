const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

/// Gru wants to test out forEachto check who's present. 
//So as he goes down the array of minions, they should console.logthat they're here.

minions.forEach((name) => {
    console.log(name + " " + "is here!")
})

//sing the mapmethod, capitalize each minion's name EXCEPT kevin's 
//because he was being sneaky and save it to a new array called capitalizedMinions

let capitalizedMinions = minions.map((item) => {  
    if (item === "kevin"){
        return item
    }else{
    //console.log(item)
    return item[0].toUpperCase() + item.slice(1);
    }         
})

//Use filterto filter out minions that are not capitalized and save the correctly 
//capitalized minions to an array called actuallyCapitalizedMinions
//const actuallyCapitalizedMinions = []

const actuallyCapitalizedMinions = capitalizedMinions.filter((item, index) => {
    const firstLetter = item[0]
    return firstLetter !== firstLetter.toLowerCase()
})

// const result = capitalizedMinions.filter(item != toLowerCase)

const confirmCap = actuallyCapitalizedMinions.every((item, index) => {
    if(item[0] === item[0].toUpperCase()){
        return true
    }else{
        return false
    }
})
// const confirmCap = actuallyCapitalizedMinions.every((item, index) => {
//     console.log(item[0])
//     return item[0] = item.toUpperCase() + item.slice(1)
// })

// - Create a function called isCapitalizedthat accepts a minion as an argument and checks whether or not the first letter of 
//the minion's name is capitalized
// - Now using both the everymethod and the isCapitalizedmethod you just wrote, check whether or not all the capitalizedMinionsare 
//capitalized

const isCapitalized = capitalizedMinions.every((item, index) => {
    if(item[0] === item[0].toUpperCase()){
        return true
    }else{
        return false
    }
})

//Using find, find which minion is not correctly capitalized in the original capitalizedMinionsarray and save it to a variable 
//called uncapitalizedMinion, then console log it

const uncapitalizedMinion = capitalizedMinions.find((minion, index) => {
    const lowerCase = minion[0]
    return lowerCase == lowerCase.toLowerCase() 
})

// Using findIndex, find what index kevin is in the original capitalizedMinionsarray

const kevin = capitalizedMinions.findIndex(name => name ==="kevin")

//Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.

capitalizedMinions[1] = capitalizedMinions[1][0].toUpperCase() + capitalizedMinions[1].slice(1)
    
//Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly

const capKevin = capitalizedMinions.every((item, index) => {
    if(item[0] === item[0].toUpperCase()){
        return true
    }else{
        return false
    }
})

//First, using map create a separate array called minionNameLengths that maps out the minions' name lengths
let minionNameLengths = minions.map((names) => {
    return names.length
})



console.log(capitalizedMinions)
//console.log(minions)
console.log(actuallyCapitalizedMinions)
console.log(confirmCap)
console.log(isCapitalized)
console.log(uncapitalizedMinion)
console.log(kevin)
console.log(capKevin)
console.log(minionNameLengths)

//Use reduceto sum up the minionNameLengthsarray
console.log(minionNameLengths.reduce((acc, item, index) => {return acc + item}, 0)) 

//I decided to stop here to start moving on to my Project 1. 