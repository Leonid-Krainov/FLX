// Your code goes here

var stage = "a game";
while (confirm("Do you want to play " + stage + "?") === true) {
  var min = 0;
  var max = 5;
  var win = 0;
  var bank = 10;
  var startPrize = 10;
  var attempts = 3;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log (number);
  while (attempts > 0) {
    var userNumber = prompt("Enter a number from " + min + " to " + max + "\n" +
    "Attempts left: " + attempts + "\nTotal prize: " + win + "\n" +
    "Possible prize on current attempt: " + bank);
    if (parseInt(userNumber) !== number) {
      bank = Math.floor(bank/2);
      attempts--;
    } else {
      win = win+bank;
      var nextRound = confirm("Congratulation! Your prize is " + win + ". Do you want to continue the game?");
      if (nextRound === true) {
        startPrize = startPrize*3;
        max = max*2;
        bank = startPrize;
        attempts = 3;
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log (number);
      } else {
        break;
      }
    } 
  }
  alert ("Thank you for a game. Your prize is: " + win);
  stage = "again";
}
alert ("You did not become a millionaire, but can.");
