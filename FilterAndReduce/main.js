// Problem:
// Given an array of numbers, filter out the even numbers and create a new array with only the odd numbers.


const oddNumbers = (arr) => {
    return arr.filter((element) => {
        if(element % 2 === 1 ){
            return element
        }
    })
    
}
console.log('oddNumbers: ',oddNumbers([4,33,6,445,23,5,44,56,8,43,64,86,43,4,97,12,33,445,76]))


// Sum of Array Elements:
// Write a function that takes an array of numbers as input and returns the sum of all the elements.


const sumArray = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}
console.log(sumArray([4, 33, 6, 445, 23, 5]));


// Sum of Squares of Positive Numbers:
// Given an array of numbers, find the sum of the squares of all positive numbers in the array.

const sumSquaresPositiveNumbers = (arr) => {
    return arr.filter((element) => {
        if(element > 0){
            return element
        }
    }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
}

console.log(sumSquaresPositiveNumbers([6,4,2,5,6,9,-2,-5,-44,-3]))


// Product of Even Numbers:
// Given an array of numbers, calculate the product of all even numbers in the array.


const productEvenNumber = (arr) => {
    const evenNum = arr.filter((element) => {
        if(element % 2 === 0){
            return element
        }
    })

    const productNum = evenNum.reduce((accumulator, currentValue) => {
        return accumulator * currentValue
    })
    return productNum
}

console.log(productEvenNumber([6,4,2,5,6,9]))


// Count of Words with Length Greater Than 5:
// Given an array of strings, count the number of words with a length greater than 5 characters.

const wordsLengthGreaterFive = (strings) => {
    const arrStrLen = strings.filter((element) => {
        if(element.length > 5){
            return element
        }
    })
    return arrStrLen.length
}
console.log(wordsLengthGreaterFive(["Given", "an", "array" ,"of", "strings", "count", "the" ,"number", "of" ,"words", "with", "a", "length", "greater", "than", "5", "characters",]))


// Concatenate and Uppercase:
// Given an array of strings, concatenate them into a single string and convert it to uppercase.

const concatenateAndUppercase = (arr) => {
    const arrUpper =  arr.map(element => {
        return element.toUpperCase();
    });

    return arrUpper.join("")
}

console.log(concatenateAndUppercase(['hello', 'world', 'javascript']))


// Average of Odd Numbers:
// Given an array of numbers, find the average of all odd numbers in the array.

const averageOddNumbers = (arr) => {
    return arr.filter((element) => {
        if(element % 2 === 1){
            return element
        }
    }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }) / 2
}
console.log(averageOddNumbers([6,4,2,5,6,9]))



// Filter Non-Prime Numbers:
// Given an array of numbers, filter out the non-prime numbers.

const filterNonPrimeNumbers = (arr) => {
    const arrNonPrime = arr.filter((element) => {
        
    })
}
console.log(filterNonPrimeNumbers([2, 5, 8, 11, 15, 20]))
// Find Maximum Length String:
// Given an array of strings, find the string with the maximum length.

// Sum of Squares of Numbers Divisible by 3:
// Given an array of numbers, find the sum of the squares of all numbers divisible by 3.

// Count of Palindromes:
// Given an array of strings, count the number of palindromes (strings that read the same backward as forward).

// Flatten and Sum Arrays:
// Given an array of arrays containing numbers, flatten the arrays into a single array and find the sum of all numbers.