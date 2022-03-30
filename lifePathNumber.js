function calculateLifePath(yearOrMonthOrDate) {
  let temp;
  if(yearOrMonthOrDate.length > 1){
    temp = yearOrMonthOrDate
    .split('')
    .map((char) => parseInt(char, 10))
    .reduce((acc, value) => acc + value);


    if(temp.toString().length > 1){
      return calculateLifePath(temp.toString());
    }
  }
  return temp || parseInt(yearOrMonthOrDate);
}


function lifePathNumber(dateOfBirth) {
  const [year, month, date] = dateOfBirth.split('-');

  return calculateLifePath(
    (
      calculateLifePath(year) + calculateLifePath(month) + calculateLifePath(date)
    )  .toString()
  );
  
}

console.log(lifePathNumber('1956-01-31'));
console.log(lifePathNumber("1956-01-31"), 8) 

