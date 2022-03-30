function getDivisorsCnt(n){
    let total = 0;
    for(let i = 0; i <= n; i++){
        // if(n % i == 0){
        //     total++;
        // }
        // else {
        //     total = total;
        // }
        (n % i == 0) ? total++ : total = total;
    }
    return total;
}

console.log(getDivisorsCnt(1) , 1);
console.log(getDivisorsCnt(10) , 4);
console.log(getDivisorsCnt(11) , 2);
console.log(getDivisorsCnt(54) , 8);