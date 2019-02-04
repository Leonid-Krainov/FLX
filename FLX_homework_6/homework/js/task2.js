// Your code goes here

var amount = prompt('Please input amount of money','');
var discount = prompt('Please input discount','');

let answer = (amount,discount) => {
  let finalPrice = (100 - parseFloat(discount))/100*parseFloat(amount);
  let savedMoney = parseFloat(amount) - finalPrice;
  alert ("Price without discount: " + amount + 
  "\nDiscount: " + discount + "% " +
  "\nPrice with discount: " + finalPrice.toFixed(2) +
  "\nSaved: " + savedMoney.toFixed(2))
}
(function(amount,discount){
  if (amount.match(/[^0-9.]/g) || discount.match(/[^0-9.]/g)
   || 0>parseFloat(discount)>99 || parseFloat(amount)>9999999) {
  alert ("Invalid input data");
  } else {
    answer(amount,discount);
  }
})(amount,discount);