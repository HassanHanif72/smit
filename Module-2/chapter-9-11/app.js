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
    alert("Grade A");
} else if (percentage >= 80) {
    alert("Grade B");
} else if (percentage >= 70) {
    alert("Grade C");
} else if (percentage >= 60) {
    alert("Grade D");
} else {
    alert("Fail");
}


