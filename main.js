import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency 
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    Franc: 0.91,
    Turkish: 32.5,
    Saudi_Arabian: 3.75
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: ("Enter from Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "Franc", "Turkish", "Saudi_Arabian"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "Franc", "Turkish", "Saudi_Arabian"]
    },
    {
        name: "amount",
        message: "Please Enter your amount",
        type: "number"
    }
]);
// dynamic pattern
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromamount = currency[userFromCurrency];
let toamount = currency[userToCurrency];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(convertedamount);
