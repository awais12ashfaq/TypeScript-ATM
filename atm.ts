#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    Amount: number,
}

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your ID: "

    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your Pin: "

    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current" , "Savings"],
        message: "Select your account type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash" , "Withdraw"],
        message: "Select your transaction type: ",
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "Amount",
        choices: ["1000" , "3000"  , "5000"],
        message: "Select your amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        },
    },
    {
        type: "numbe",
        name: "Amount",
        message: "Enter your amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw"
        },
    },
    
])

if (answers.userId && answers.userPin){


    const balance = Math.floor(Math.random()*10000000);
    console.log("Your remaining account balance is : ", balance);
    
}

