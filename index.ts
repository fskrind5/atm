#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // * Dollar
let pinCode = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code:",
        type: "number",
    }
]);

if (pinAnswer.pin === pinCode)
{
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);

    if (operationAns.operation === "Withdraw")
    {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount:",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;

        // console.log("Your remaining balance is: " + myBalance);
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("yourBalance is: " + myBalance)
} 
}