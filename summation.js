var summation = function (num) {
    let total = 0;
    for(let i = 0; i <= num ; i++){
        total = total + i;
    }
    return total
}

console.log(summation(1), 1)
console.log(summation(8), 36)