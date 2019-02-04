// Your code goes here

var a = prompt('Please input value "a"','');
var b = prompt('Please input value "b"','');
var c = prompt('Please input value "c"','');
let answer = (a,b,c) => {
  var a1 = parseFloat(a);
  var b1 = parseFloat(b);
  var c1 = parseFloat(c);
  let d = b1*b1 - 4*a1*c1;
  if (d < 0) {
    alert("no solution");
  } else if (d === 0) {
    let x = (-b + Math.sqrt(d))/(2*a);
    alert ("x = " + x);
  } else {
    let x1 = (-b1 - Math.sqrt(d))/(2*a1);
    let x2 = (-b1 + Math.sqrt(d))/(2*a1);
    alert("x1 = " + x1 + " and x2 = " + x2);
  }
};
(function(a,b,c){
  if (a.match(/[^-0-9.]/g) || b.match(/[^-0-9.]/g) || c.match(/[^-0-9.]/g)) {
  alert ("Invalid input data");
  } else {
    answer(a,b,c);
  }
})(a,b,c);
