let userInput = window.prompt("Enter a number:");
console.log("Before conversion:", userInput, typeof userInput);

let convertedNumber = Number(userInput);
console.log("After conversion:", convertedNumber, typeof convertedNumber);

let result = convertedNumber * 2;
console.log("Your number multiplied by 2 is:", result);

if (isNaN(convertedNumber)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    console.log(`Your number multiplied by 2 is: ${result}`);
}

if (!isNaN(convertedNumber)) {
    document.getElementById("output").textContent = `Your number multiplied by 2 is: ${result}`;
} else {
    document.getElementById("output").textContent = "Invalid input! Please enter a number.";
}
