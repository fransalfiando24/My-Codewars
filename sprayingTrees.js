function task(w, n, c) {
    // ------- Cara BAR BAR -------
    // let name = "";
    // if(w == "Monday"){
    //     name = "James";
    // }
    // else if(w == "Tuesday"){
    //     name = "John";
    // }
    // else if(w == "Wednesday"){
    //     name = "Robert";
    // }
    // else if(w == "Thursday"){
    //     name = "Michael";
    // }
    // else if(w == "Friday"){
    //     name = "William";
    // }
    
    // let money = n * c;

    // return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${money} dollars to buy liquid`

    let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
    return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
  }

console.log(task('Wednesday',10,2),'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid')
console.log(task('Monday',4,3),'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid')
console.log(task('Friday',5,4),'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid')
console.log(task('Tuesday',6,1),'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid')
console.log(task('Thursday',5,3),'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid')