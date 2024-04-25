#!usr/bin/env node
//First ask the pin code
//Then ask the operation of withdrawl and Check ammount
//Withrawl the money <or> Tell the balance
import inquirer from "inquirer";
let mybalance = 10000; //dollers
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    { name: "pin", type: "number", message: "Please enter your Pin:" },
]);
if (pinanswer.pin === mypin) {
    let operationans = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select operation:",
            type: "list",
            choices: ["Withdrawl", "Check Balance"],
        },
    ]);
    console.log(operationans);
    if (operationans.Operation === "Withdrawl") {
        let remainingamount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please Enter amount you want to Withdraw:",
                choices: ["1000", "2000", "5000", "10000", "Other Amount"],
            },
        ]);
        if (remainingamount.amount === "1000") {
            console.log(`Your remaining balance is: ${mybalance - remainingamount.amount}`);
        }
        else if (remainingamount.amount === "2000") {
            console.log(`Your remaining balance is: ${mybalance - remainingamount.amount}`);
        }
        else if (remainingamount.amount === "5000") {
            console.log(`Your remaining balance is: ${mybalance - remainingamount.amount}`);
        }
        else if (remainingamount.amount === "10000") {
            console.log(`Your remaining balance is: ${mybalance - remainingamount.amount}`);
        }
        else if (remainingamount.amount === "Other Amount") {
            let otheramount = await inquirer.prompt([
                { name: 'youramount', type: 'number', message: 'please other amount' }
            ]);
            console.log(`Your remaining balance is: ${mybalance - otheramount.youramount}`);
        }
    }
    else
        operationans.operation === "Check Balance";
    {
        console.log(`Your Balance Is: ${mybalance} `);
    }
}
else {
    console.log("You Enter the wrong pin");
}
