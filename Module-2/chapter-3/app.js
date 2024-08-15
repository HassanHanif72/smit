// Question 1
function age() {
    var age = 29;
    alert("I am " + age + " years old");
}

// Question 2
function getVisiters() {
    var visitCount = localStorage.getItem('userCount');
    if (visitCount === null) {
        visitCount = 0;
    }

    visitCount++;
    localStorage.setItem('userCount', visitCount);
    return visitCount;
}

function showVisitors() {
    var showNumbers = getVisiters();
    alert("You have visited this site " + showNumbers + " times");
}

// Question 3
var birthYear = "25 Aug 1994"
document.write("<p>My birth year is " + birthYear + "</p>");

// Question 4
var visitorName = "John Doe";
var productTitle = "T-shirt(s)"
var productQuantity = 5;
var message = "<b>" + visitorName + "</b>" + " ordered " + "<b>" + productQuantity + " " + productTitle + "</b>" + " on XYZ Clothing store";
document.write(message);