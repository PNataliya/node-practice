const chalk = require("chalk");

console.log(chalk.blue('Hello! Game is open...'));

const readLine = require("readline").createInterface({
    output: process.stdout,
    input: process.stdin
})

let count = 1;
const rundomNumder = String( Math.round(Math.random()*10));
const tryLimit = 3;

const game = () => {
if(count <= tryLimit ) {
    readLine.question(chalk.green("Try to guess number from 0 to 10 \n"), (number)=> {
if(number === rundomNumder) {
    console.log(chalk.red.bgYellowBright("You win!!!!"));
    readLine.close();
}
if(number > rundomNumder){
    console.log(chalk.yellow("Your number is bigger.."));
    count += 1;
    game();
}
if(number < rundomNumder){
    console.log(chalk.bgMagenta("Your number is less.."));
    count += 1;
    game();
}

    })
} else {
    console.log(chalk.grey.underline("Game over.....((("));
    readLine.close();
}
}
game();