/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(partnerName, geographicLocation, jobTitle, numberKids) {
    if(partnerName === '' && geographicLocation === '' && jobTitle === '' && numberKids === ''){
      
      console.log('must enter your partner\'s name');
      return;
    } else {
      if (!isNaN(numberKids)){
        kids = parseInt(numberKids)
        if(kids > 0){
          console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${kids} kids.`)
        } else {
          console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName}.`)
        }
      }
    }

    console.log("hello")
  
}
//tellFortune("Alice", "Jordan", "Software Engineer", "8");




/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(puppyAge){
  let AgeConvertHuman = puppyAge * 7;
  console.log(`Your doggie is ${AgeConvertHuman} years old in dog years!`)
}
// calculateDogAge(3)






/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {

  let numberDays = (100 - age) * 365;
  let numberCubsTea = numberDays * amountPerDay;
  console.log(numberCubsTea)  
}

// calculateSupply(30, 3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  return "hello " + name
}
//console.log(greet("jaafar"))

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(x) {
  return 2 * x;
}

function double(x) {
  return 2 * x;
}
//double(7)
function double(x) {
  return 2 * x;
}
//double(7)

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x ;
}

function double2(x){ 
return 2 * x;
}

function double3(x){
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
 function cube(number){
  return number * number * number;
 }

//  console.log(cube(4))
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2){
  return num1 * num2;
}
// console.log(multiply(4,5))


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("yes you can")
  } else {
    console.log(`please come back after ${20 - age} years to get one`)
  }
}
// console.log(canIGetADrivingLicense(14))


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(word1, word2) {
  if(word1.length === word2.length){
    return true;
  } else {
    return false
  }
}

// console.log(sameLength("jaafar" , "amamam"))


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1 , num2) {
  if(num1 > num2){
    return num1;
  } else {
    return num2
  }
}

// console.log(largerNubmer(5, 99))
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2, num3){
  let arr = [num1 , num2, num3]
  let count = 0
  let min = arr[0]
  
 console.log(count < arr.length)
  while(count < arr.length){
    if(min > arr[count]){
      min = arr[count]
    }
    count++
  }
  return min

}

// console.log(smallerNubmer(80 , 54, 8))

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5){
  let arr = [str1, str2, str3, str4, str5]
  let count = 0
  let min = arr[0].length

  while(count < arr.length){
    if(min > arr[count].length){
      min = arr[count]
    }
    count++
  }
  return min
}
// console.log(shorterString("air","by","car","school","github"))

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4){
  let arr = [str1, str2, str3, str4]
  
  let max = arr[0]

  let len =arr.length


  for (let i = 0; i < len; i++) {
    if(max.length < arr[i].length){
      max = arr[i]
    }
    
  }
  return max
}
// console.log(longerString("air","schoo","car","github"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
 function isEven(number){
  return number % 2 === 0
 }
// console.log(isEven(134))
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number){
  return number % 2 !== 0
}
//console.log(isOdd(54))


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number){
  if(number < 0)
    number *= -1
  
    return number
}
// console.log(positive(87))
// console.log(positive(-345))
// console.log(positive(3))
// console.log(positive(-49))


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname, lname){
  return `${fname} ${lname}`
}
// console.log(fullName("Jaafar", "Alwahsh"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(num1, num2, num3, num4, num5){
  let arr = [num1, num2, num3, num4, num5]
  let sum = 0
 for(let i = 0; i < 5; i++){
  sum += arr[i]
 } 
 return sum/5
}
// console.log(average(5,7,9,3,5))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random()
}

// console.log(randomNumber())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min, max){
  return Math.random() * (max - min) + min
}
console.log(randomBetweenNumbers(3, 100))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(number){
  if(number > 95 && number < 100){
    return "A"
  } else if(number > 85 && number < 94) {
    return "B"
  } else if(number > 70 && number < 84) {
    return "C"
  } else if(number > 50 && number < 69) {
    return "D"
  } else {
    return "F" 
  }
}
// console.log(scoreInUniversty(80))
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let number = 0
function counter(){
  return number++
}
// console.log(counter())
// console.log(counter())
// console.log(counter())

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
let numberCounter = 0
function resetCounter(){
  return numberCounter--
}

function counter(){
  return numberCounter++
}

// console.log(counter())
// console.log(counter())
// console.log(resetCounter())
// console.log(resetCounter())
