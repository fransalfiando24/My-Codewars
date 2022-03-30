function getSum( a,b )
{
    let total = 0;
    if( a < b) {
        for(let i = a; i <= b; i++){
        total = total + i;
     }
    }
    else if(a > b) {
        for(let i = b; i <= a; i++){
        total = total + i;
        }
    }
    return total;
}

console.log(getSum(0,-1),-1);
console.log(getSum(0,1),1);