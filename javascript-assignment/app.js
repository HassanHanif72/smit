var date = new Date();
var day = +prompt("Enter Your Day (1 to 31): ");
var month = prompt("Enter Your Month (1 to 12): ");
var year = +prompt("Enter Your Year: ");

if (day >= 1 && day <= 31) {
    var currntDate = date.getTime();
    // var birthDate = new Date(`${year}-${month}-${day}`);
    var birthDate = new Date(`${day} ${month}, ${year}`);
    var totalYear = currntDate - birthDate;
    console.log(birthDate);
    alert("Your age is: " + Math.floor(totalYear / (1000 * 60 * 60 * 24 * 365.25)));
} else {
    alert("Please Correct Date...");
}