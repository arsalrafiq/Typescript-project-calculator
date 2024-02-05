#!/usr/bin/env node
import inquirer from "inquirer";

// async function main() {
  async function runCLI() {
  const answers: {
    numberOne: number;
    numberTwo: number;
    operator: string;
  } = await inquirer.prompt([
    {
      type: "number",
      name: "numberOne",
      message: "Kindly enter your first number: ",
    },
    {
      type: "number",
      name: "numberTwo",
      message: "Kindly enter your second number: ",
    },
    {
      type: "list",
      name: "operator",
      message: "Select operator: ",
      choices: ["+", "-", "/", "*"],
    },
  ]);

  const { numberOne, numberTwo, operator } = answers;

  if (numberOne !== undefined && numberTwo !== undefined && operator) {
    let result: number = 0;

    switch (operator) {
      case "+":
        result = numberOne + numberTwo;
        break;
      case "-":
        result = numberOne - numberTwo;
        break;
      case "/":
        result = numberOne / numberTwo;
        break;
      case "*":
        result = numberOne * numberTwo;
        break;
      default:
        console.log("Invalid operator");
        return;
    }

    console.log("Your result is:", result);
  } else {
    console.log("Kindly enter valid input");
  }
}

runCLI();
