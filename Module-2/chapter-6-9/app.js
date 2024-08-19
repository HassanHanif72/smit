// Question 1
var a = 10;
document.write("The value of a is " + a + "<br>");
document.write("---------------------------------------------------------------------------<br>");

++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("---------------------------------------------------------------------------<br>");
document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br>");
document.write("---------------------------------------------------------------------------<br>");
--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("---------------------------------------------------------------------------<br>");
document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br>");
document.write("---------------------------------------------------------------------------<br>");

// Question 2
var a = 2, b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");

// document.write(--a + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");

document.write("Final Result: ");
document.write(--a - --b + ++b + b-- + "<br>");


// Question 3
var enterName = prompt("Enter Name:");
alert("Welcome to " + enterName);

// Question 4
var enterNumber = prompt("Enter Table Number: ");
var add = 1;
document.write("<h2>" + "Table Of " + enterNumber + "</h2>");
document.write(enterNumber + "*" + add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");
document.write(enterNumber + "*" + ++add + " = " + enterNumber * add + "<br>");

// Question 5
var subject1 = prompt("Enter Your 1st Subject");
var subject2 = prompt("Enter Your 2nd Subject");
var subject3 = prompt("Enter Your 3rd Subject");
var totalMarks = 100;
var obtainedFirst = parseFloat(prompt(subject1 + " Subject Marks"));
var obtainedSecond = parseFloat(prompt(subject2 + " Subject Marks"));
var obtainedThird = parseFloat(prompt(subject3 + " Subject Marks"));
var totalObtained = obtainedFirst + obtainedSecond + obtainedThird;
var percentage = (totalObtained * 100) / 300;
document.write("<h2>Total Subject Percentage</h2>");

document.write(`<table>
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${obtainedFirst}</td>
    <td>${obtainedFirst}%</td>
  </tr>
  <tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${obtainedSecond}</td>
    <td>${obtainedSecond}%</td>
  </tr>
  <tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${obtainedThird}</td>
    <td>${obtainedThird}%</td>
  </tr>
  <tr>
    <td></td>
    <td><b>300</b></td>
    <td><b>${totalObtained}</b></td>
    <td><b>${percentage}%</b></td>
  </tr>
</table>`);
