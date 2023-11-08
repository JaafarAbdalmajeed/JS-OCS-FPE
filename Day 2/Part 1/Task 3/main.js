let count = 0
for(let i = 1; i < 1000; i++){
    
    if(i % 13 === 0){
        console.log(i)
        count++
    }
}

console.log("*********************")
console.log("\t", count, "time")
console.log("*********************")