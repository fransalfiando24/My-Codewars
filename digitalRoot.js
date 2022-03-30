function digital_root(n) {
  let total = 0;
  String(n).split("").map(num => {
      total += Number(num);
  });

  return total >= 10 ? digital_root(total) : total;
}

console.log( digital_root(16), 7 )
console.log( digital_root(456), 6 )