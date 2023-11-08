function isPandigital(number){
    let arr = ['0', '1', '2', '3', '4', '5', '6','7' ,'8' ,'9'] 
    let numToString = number.toString()
    for(let i = 0; i< arr.length; i++){
        if(!numToString.includes(arr[i])){
            return false
        }
    }
    return true
}

console.log(isPandigital(90864523148909))