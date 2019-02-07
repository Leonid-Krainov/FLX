// Your code goes here

var login = prompt ("Please enter login","");
if (login === "" || login === null) {
  alert ("Canceled.");
} else if (login.length < 4) {
  alert ("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin") {
  var password = prompt ("Please enter password","");
  if (password === "" || password === null) {
    alert ("Canceled.");
  } else if (login === "User" && password === "UserPass" || login === "Admin" && password === "RootPass") {
    var currenthours = new Date().getHours();
    var greeting = currenthours < 20 ? "Good day, dear " + login + "!" : "Good evening, dear " + login + "!";
    alert (greeting);
  } else {
    alert ("Wrong password");
  }
} else {
  alert ("I don’t know you");
}
