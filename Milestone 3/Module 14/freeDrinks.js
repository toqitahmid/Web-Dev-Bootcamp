const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

readline.question('Enter your net bill : ', (input) => {
    
    let bill = Number(input);
    if(bill > 500){
        console.log("coke is free for you!");
    }
    else{
        console.log("You have to pay 30tk for coke");
    }
    readline.close();
});
