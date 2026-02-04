function isLeapYear(year){
     
    if((year%4 === 0 && year%100 != 0) || (year%400 === 0)){
        return true;
    }
    else{
        return false;
    }
}

let year = 2004;
console.log(isLeapYear(year));