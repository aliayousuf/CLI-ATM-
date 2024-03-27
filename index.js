import inquirer from "inquirer";
let mybalance = 10000;
let pincode = 1111;
console.log(`Your account balance is ${mybalance}!`);
let enterpin = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number"
    },
]);
if (enterpin.pin === pincode) {
    console.log("correct pin code!");
    let operation = await inquirer.prompt([
        {
            name: "operationselect",
            message: "select one option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operation.operationselect === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount to withdraw.",
                type: "number"
            }
        ]);
        if (amountans.amount < mybalance) {
            mybalance -= amountans.amount;
            console.log(`your remainning  balance is ${mybalance}.`);
        }
        else if (amountans.amount > mybalance) {
            console.log(`Insufficient balance`);
        }
    }
    else if (operation.operationselect === "check balance") {
        console.log(`Your current balance is: ${mybalance}.`);
    }
    else if (operation.operationselect === "fastcash") {
        let fastans = await inquirer.prompt([
            {
                name: "fast1",
                message: "enter the amount you withdraw through fastcash.",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000"]
            }
        ]);
        if (fastans.fast1 === "1000") {
            mybalance -= fastans.fast1;
            console.log(`your remaining balance is: ${mybalance}.`);
        }
        else if (fastans.fast1 === "2000") {
            mybalance -= fastans.fast1;
            console.log(`your remaining balance is: ${mybalance}.`);
        }
        else if (fastans.fast1 === "3000") {
            mybalance -= fastans.fast1;
            console.log(`your remaining balance is: ${mybalance}.`);
        }
        else if (fastans.fast1 === "4000") {
            mybalance -= fastans.fast1;
            console.log(`your remaining balance is: ${mybalance}.`);
        }
        else if (fastans.fast1 === "5000") {
            mybalance -= fastans.fast1;
            console.log(`your remaining balance is: ${mybalance}.`);
        }
    }
}
else {
    console.log("Incorrect pin code...");
}
