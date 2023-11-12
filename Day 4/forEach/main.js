/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr){
    //Your Code Here
    let arrDouble = []
    arr.forEach(element => {
        arrDouble.push(element + element)
    });
    return arrDouble
 }
 console.log(doubleValues([1,2,3]))
 /*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3]) 
 *   onlyEvenValues([5,1,2,3,10]) 
 * 
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
 function onlyEvenValues(arr){
     //Your Code Here
     let arrEven = []
     arr.forEach(element => {

        if(element % 2 === 0){
            arrEven.push(element)
        }
     })

     return arrEven
 }
 console.log(onlyEvenValues([5,1,2,3,10]))
 
 /*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
 *  
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
 function showFirstAndLast(arr){
    //Your Code Here
    let arrFaL = []
    arr.forEach(element => {
        let len =element.length
        arrFaL.push(`${element[0] + element[len-1]}`)
    })

    return arrFaL
 }
 console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']))
 /*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
 * to the function with the new key and value added for each object 
 * 
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
 *   
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */
 function addKeyAndValue(arr,key,value){
     //Your Code Here
     let arrKaV = []
    arr.forEach(obj => {
        obj[key] = value
        arrKaV.push(obj)
    })
    return arrKaV
 }
 console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))
 /*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
 * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
 * 
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
 * Test Cases 2:  vowelCount('Tim') // {i:1};
 * Test Cases 3:  vowelCount('Matt') // {a:1})
 * Test Cases 4:  vowelCount('hmmm') // {};
 * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 *   
 * Result:
 * Test Cases 1: {e:2,i:1};
 * Test Cases 2: {i:1};
 * Test Cases 3: {a:1})
 * Test Cases 4: {};
 * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 */

 function vowelCount(str) {
    let vowel = [
        { 'char': 'i', 'count': 0 },
        { 'char': 'a', 'count': 0 },
        { 'char': 'e', 'count': 0 },
        { 'char': 'o', 'count': 0 },
        { 'char': 'u', 'count': 0 }
    ];

    str.toLowerCase().split('').forEach(ch => {
        let vowelObject = vowel.find(element => element.char === ch);

        if (vowelObject) {
            vowelObject.count++;
        
        }
    });
    let vowelObj = {}
    vowel.forEach(element => {
        if(element.count > 0){
            vowelObj[element.char] = element.count
        }
    })
    return vowelObj;
}

console.log(vowelCount('I Am awesome and so are you'));