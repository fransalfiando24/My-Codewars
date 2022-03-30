function insurance(age, size, numofdays){
    let total = 0;
    let ageCharge = 0;
    let sizeCharge = 0;

    if(numofdays >= 1 ){

        // ----- Cara BarBar -----

        // if (age <= 24 ) {
        //     ageCharge = 10;
        // }
        // else{
        //     ageCharge = 0;
        // }
         
        // if(size == "economy"){
        //     sizeCharge = 0;
        // }
        // else if(size == "medium"){
        //     sizeCharge = 10;
        // }
        // else {
        //     sizeCharge = 15;
        // }

        // total = (50*numofdays) + (sizeCharge*numofdays) + (ageCharge*numofdays);

        // ------   Cara Simple ----
        age <= 24 ? ageCharge = 10 : ageCharge = 0;
        size == "economy" ? sizeCharge = 0 : size == "medium" ? sizeCharge = 10 : sizeCharge = 15;

        total = (50 + sizeCharge + ageCharge)*numofdays;
    }
    else{
        total = 0;
    }
    return total;
}

console.log(insurance(18, "medium", 7), 490);
console.log(insurance(30,"full-size",30),1950);
console.log(insurance(21,"economy",-10), 0);
console.log(insurance(42,"my custom car",7), 455);