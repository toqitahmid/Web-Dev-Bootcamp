const readline = require('node:readline/promises');
const {stdin: input,
    stdout: output
} = require('node:process');

async function getInputs(){
    const rl = readline.createInterface({input, output});

    const InputMymark = await rl.question("Enter your mark : ");
    const Mymark = Number(InputMymark);
    const InputFriendmark = await rl.question("Enter your friend mark : ");
    const Friendmark = Number(InputFriendmark);

    if(Mymark > 80){
        if(Friendmark < 80 && Friendmark >= 60){
            console.log("Good luck next time");
        }
        else if(Friendmark < 60 && Friendmark >= 40){
            console.log("keep friend's message unseen");
        }
        else if(Friendmark < 40){
            console.log("Block him/her");
        }
    }
    else{
        console.log("go to home and sleep and act sad")
    }
    rl.close();
}

getInputs();