const { stdin } = require('node:process');
const readline = require('node:readline/promises');
const{
    stdin: input,
    stdout: output
} = require('node:process');

async function getInputs(){

    const rl = readline.createInterface({input,output});

    const Inputwieght = await rl.question('Enter your weight : ');
    const Inputhight = await rl.question('Enter your hight : ');

    const weight = Number(Inputwieght);
    const hight = Number(Inputhight);

    let BMI = weight/(hight*hight);
    console.log(`Your BMI is : ${BMI}`);

    if(BMI < 18.5){
        console.log('You are underweight');
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        console.log('You are normal');
    }
    else if(BMI >= 25 && BMI <= 29.9){
        console.log('You are overweight')
    }
    else{
        console.log('You are obese')
    }
    rl.close();
}
getInputs();