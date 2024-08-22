// Question 1
var char = +prompt("Enter Single Character:");
if (char >= 48 && char <= 57) {
    alert("The character is a number.");
} else if (char >= 65 && char <= 90) {
    alert("The character is an uppercase letter.");
} else if (char >= 97 && char <= 122) {
    alert("The character is a lowercase letter.");
} else {
    alert("The character is neither a number, uppercase letter, nor lowercase letter.");
}

// Question 2
var num1 = +prompt("Enter First Integer: ");
var num2 = +prompt("Enter Second Integer: ");
if (num1 > num2) {
    alert("The Larger Ineteger is " + num1);
} else if (num2 > num1) {
    alert("The Larger Ineteger is " + num2);
} else {
    alert("Both ineteger are equal");
}

// Question 3
var inputNo = +prompt("Enter Number:");
if (inputNo > 0) {
    alert("Number is positive");
} else if (inputNo < 0) {
    alert("Number is negative")
} else {
    alert("Number is zero");
}

// Question 4
var char = prompt("Enter Character");
if (char.length !== 1) {
    alert("Please enter one character");
} else {
    var vowels = "aeiouAEIOU"
    var checkVowels = vowels.includes(char);
    alert("Its Vowel " + checkVowels);
}

// Question 5
var correctPwd = "password123";
var enterPwd = prompt("Enter Password: ");
if (enterPwd === null || enterPwd === "") {
    alert("Please Enter Your Password");
} else if (enterPwd === correctPwd) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect Password");
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}

// Question 7
var time = 19;
if (time >= 0 && time < 12) {
    console.log("Good Morning");
} else if (time >= 12 && time < 17) {
    console.log("Good Afternoon");
} else if (time >= 17 && time < 21) {
    console.log("Good Evening");
} else if (time >= 21 && time < 24) {
    console.log("Good Night");
} else { }



