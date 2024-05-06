#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 1234;

let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});

if (pinanswer.pin === mypin) {
    console.log("Correct pin code");

    let operationanswer = await inquirer.prompt({
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["Withdraw", "Check Balance", "Fast Cash"]
    });

    if (operationanswer.operation === "Withdraw") {
        let amountans = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number"
        });

        mybalance -= amountans.amount;
        console.log("Your remaining balance is: " + mybalance);
    } else if (operationanswer.operation === "Check Balance") {
        console.log("Your current balance is: " + mybalance);
    } else if (operationanswer.operation === "Fast Cash") {
        let fastCashAmount = await inquirer.prompt({
            name: "fastCashAmount",
            message: "Select fast cash amount",
            type: "list",
            choices: ["100", "500", "1000", "2000"] 
        });

        mybalance -= parseInt(fastCashAmount.fastCashAmount);
        console.log("Your remaining balance is: " + mybalance);
    }
} else {
    console.log("Incorrect pin code");
}