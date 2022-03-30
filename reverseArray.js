function digitize(n) {
  return n.toString().split('').reverse().map( (char) => parseInt(char, 10));
}

console.log(digitize(35231),[1,3,2,5,3]);