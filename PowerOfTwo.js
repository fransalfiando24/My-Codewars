function powersOfTwo(n){
    let arr=[];
    for(let i = 0; i <= n; i++){
        arr.push(i);
    }

    let mapped = arr.map((number) => {
        return Math.pow(2,number);
    })
    return mapped;
}

    console.log(powersOfTwo(0), [1])
    console.log(powersOfTwo(1), [1, 2])
    console.log(powersOfTwo(4), [1, 2, 4, 8, 16])