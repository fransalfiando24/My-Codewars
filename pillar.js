function pillars(num_pill, dist, width) {
    return num_pill == 1 ? 0 : ((num_pill - 2) * width) + ((100* dist) * (num_pill-1));  
  }

console.log(pillars(1, 10, 10) , 0);
console.log(pillars(2, 20, 25) , 2000);
console.log(pillars(11, 15, 30) , 15270);