function highAndLow(numbers){
    const arr = numbers.split(' ');
    return Math.max.apply(null,arr) + " " + Math.min.apply(null,arr)
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");   
console.log(highAndLow("1 2 3 4 5"), "5 1");   
console.log(highAndLow("1 2 -3 4 5"),"5 -3");   
console.log(highAndLow("1 9 3 4 -5"),"9 -5");   