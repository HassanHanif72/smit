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
var a = 2 , b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");

// document.write(--a + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");

document.write("Final Result: ");
document.write(--a - --b + ++b + b-- + "<br>");