// Question 1
var city = prompt("Please Enter City:");
if (city === "Karachi") {
    alert("Welcome to city of lights")
}
else {
    alert("Welcome to " + city)
}

// Question 2
var gender = prompt("Please Enter Gender:");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Madam");
} else {
    alert("Error: Please Correct Gender");
}

// Question 3
var color = prompt("Please Enter Traffic Signal Color");
if (color === "red") {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Error: Please Correct Signal Color")
}

// Question 4
var fuel = prompt("Enter Current Fuel:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
} else {
    alert("Please Less than 0.25 litres");
}

// Question 5
// A
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
} else {
    alert("Given condition for variable a is false");
}

// // B
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
} else {
    alert("Given condition for variable b is false");
}

// C
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
} else if (c === 13) {
    alert("Condition 2 is true");
} else if (++c < 14) {
    alert("Condition 3 is true");
} else if (c === 14) {
    alert("Condition 4 is true");
} else {
    alert("Condition False");
}

// D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals")
} else {
    alert("The cost is not equal");
}

// E
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// F
if ("cat" < "cat") {
    alert("Cat is smaller than cat");
}

// Question 6
var subject1 = parseFloat(prompt("Enter 1st Subject Marks"));
var subject2 = parseFloat(prompt("Enter 2nd Subject Marks"));
var subject3 = parseFloat(prompt("Enter 3rd Subject Marks"));
var totalMarks = 300;
var totalNo = subject1 + subject2 + subject3
var percentage = (totalNo * 100) / totalMarks;
// alert(percentage);
if (percentage >= 90) {
    alert("Grade A \n" + "Total Marks: " + totalMarks + "\nMarks Obtained: " + totalNo + "\nPercentage: " + percentage + "%" + "\nRemarks: Excellent");
} else if (percentage >= 80) {
    alert("Grade B \n" + "Total Marks: " + totalMarks + "\nMarks Obtained: " + totalNo + "\nPercentage: " + percentage + "%" + "\nRemarks: Need To Improve");
} else if (percentage >= 70) {
    alert("Grade C");
} else if (percentage >= 60) {
    alert("Grade D");
} else {
    alert("Fail");
}

// Question 7
var sacretNo = +prompt("Enter Your Sacret No:");
if (sacretNo === 6) {
    alert("Bingo! Correct Answer");
} else if (sacretNo === 7) {
    alert("Close enough to the correct answer");
} else {
    alert("Try Again");
}

// Question 8
var diviNo = +prompt("Enter Number: ");
if (diviNo % 3 === 0) {
    alert(diviNo + " is divisible by 3");
} else {
    alert(diviNo + " is not divisible by 3");
}

// Question 9 
var checkNum = +prompt("Check Even No and Odd No:");
if (checkNum % 2 === 0) {
    alert("Its Even Number");
} else {
    alert("Its Odd Number");
}

// Question 10
var temp = +prompt("Enter Temperature: ");
if (temp > 40) {
    alert("It is too hot outside");
} else if (temp > 30) {
    alert("The weather today is normal");
} else if (temp > 20) {
    alert("Today's weather is cool");
} else if (temp > 10) {
    alert("OMG! Today weather is so cool");
}

// Question 11 
var firstNumber = +prompt("Enter First Number:");
var secondNumber = +prompt("Enter Second Number:");
var add = firstNumber + secondNumber;
var minus = firstNumber - secondNumber;
var mul = firstNumber * secondNumber;
var div = firstNumber / secondNumber;
var mod = firstNumber % secondNumber;
alert("Add: " + add + "\n" + "Minus: " + minus + "\n" + "Multiply: " + mul + "\n" + "Divide: " + div + "\n" + "Modulus: " + mod);


