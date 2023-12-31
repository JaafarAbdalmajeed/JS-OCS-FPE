//console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ] => [1, 7945]

 ["Str" "alex","moh" => ["Str", "alex", "moh"]

 'the','fox' 'over' lazy, 'dog',  ] =>  ['the','fox', 'over' ,lazy,'dog'] 

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

//solution
// var fruits=["Tomato","Banana","Watermelon"]
// console.log(fruits.indexOf('Banana'))
// console.log(fruits.indexOf('Tomato'))

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

//solution
let myFood = ['A', 'B', 'C', 'D', 'E']
let mySport = ['A', 'B', 'C']
let myMovie = ['A', 'B', 'C', 'D']
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

//solution
// const firstOfArray = (arr) =>{
//     return arr[0]
// }
// console.log(firstOfArray([3,5,7]))

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// solution
// const lastOfArray = (arr) => {
//     return arr[arr.length - 1]
// }
// console.log(lastOfArray(["a", "h", "u", "o"]))






/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var array = [0,5,7,9]
// console.log(array.shift())
// console.log(array.shift())
// console.log(array.push(10))
// console.log(array.unshift(8))
// console.log(array.unshift(6))
// console.log(array.unshift(4))
// console.log(array.unshift(3))
// console.log(array.unshift(1))
// console.log(array)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// var array2 = [5,9,-7,3.5]
// console.log(array2.push(3))
// console.log(array2.unshift(3))
// console.log(array2.shift())
// console.log(array2.pop())

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


//  const middleOfArray = (arr) => {
//     let len = arr.length
//     if(len % 2 === 0){
//         return [ arr[len/2 - 1] ,arr[len/2]]
//     } else {
//         return [arr[parseInt(len/2)]]
//     }
//  }
// console.log(middleOfArray([2,3, 4, 5, 6,5]))
// console.log(middleOfArray(['a','d' , 'r', 'o' ,' u']))
/*


9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals = []
// animals[0] = 'cat';
// animals[1] = 'ele';
// animals[2] = 'bird';

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

// const indexOfArray =  (arr, index) => {
//     return arr[index]
// }

// console.log(indexOfArray(['q', 'f', 'k', 'o', 'p' ,'k','c'], 4))




/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/



// const arrayExceptLast = (arr) => {
//     return arr.slice(0, arr.length-1)
// }
// console.log(arrayExceptLast([1,2,3,8,9]))
/*


12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
//  const addToEnd = (arr, element) => {
//     arr.push(element)
//     return arr
//  }
// console.log(addToEnd([1,2,3,8,9], 55))

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const sumArray = (arr) => {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return sum
// }
// console.log(sumArray([1,2,3,8,9]))






/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const minInArray = (arr) => {
//     arr.sort()
//     return arr[0]
// }
// console.log(minInArray([1,2,3,8,9]))









/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const removeFromArray = (arr , element) => {
//    let indexElement = arr.indexOf(element)
//    arr.splice(element, 1)
//    return arr
// }

// console.log(removeFromArray([1,2,3,9], 2))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const oddArray = (arr) => {
//     let oddArr = []
//     arr.forEach(element => {
//         if(element % 2 === 1){
//             oddArr.push(element)
//         }

//     });
//     return oddArr
// }

// console.log(oddArray([1,2,3,8,9]))

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const aveArray = (arr) => {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return sum/ arr.length
// }

// console.log(aveArray([1,2,3,8,9]))




/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// for loop
// const shorterInArray = (arr) => {
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(min.length > arr[i].length){
//             min = arr[i]
//         }
//     }
//     return min
// }
// console.log(shorterInArray(["mercer","alex", "madrasa","rashed2","emad","hala"]))

//while loop
// const shorterInArray = (arr) => {
//     let min = arr[0]
//     let count = 0
//     while(count !== arr.length){
//         console.log(arr[count])
//         console.log(min.length > arr[count].length)
//         console.log('...')
//         if(min.length > arr[count].length){
//             min = arr[count]
//         }
//         count++
//     }
//     return min
// }
// console.log(shorterInArray(["mercer","alex", "madrasa","rashed2","emad","hala"]))
/*




19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// const repeatChar = (text, ch) => {
//     let count = 0
//     for(let i =0 ;i < text.length; i++){        
//         if(text.charAt(i) === ch)
//         {
//             count++
//         }
        
//     }
//     return count
// }
// console.log(repeatChar('alex mercer madrasa rashed2 emad hala', 'a'))
/*






20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// const evenIndexOddLength = (strings) => {
//     let len = strings.length
//     let arr = []
//     for(let i =0 ; i < len; i++){
//         if(i % 2 === 0 && strings[i].length % 2 === 1){
//             arr += strings[i]
//         }
//     }
//     return arr;
// }
// console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]))


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/







// const powerElementIndex = (arr) => {
//     let arrNum = []
    
//     for(let i =0 ;i < arr.length; i++){
//         let num = 1
//         for(let j = 0 ; j < i; j++){
//             num *= arr[i]
//         }
//         arrNum.push(num)
//     }
//     return arrNum
// }
// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]))
/*









22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// const evenNumberEvenIndex = (nums) => {
//     let result = []
//     for(let i = 0; i < nums.length; i++){
        
//         if(i % 2 === 0 && nums[i] % 2 === 0){
//             result.push(nums[i])
//         }
//     }
//     return result
// }
// console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]))