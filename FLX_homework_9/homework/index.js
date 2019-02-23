// Your code goes here

function findTypes() {
  let arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr[i] = typeof (arguments[i])
    }
  return arr;
}
findTypes(null, 5, "hello");

function executeforEach(arr,func) {
  for (var i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}
executeforEach([1,2,3], function(el) {
  console.log(el);
});

function mapArray(arr,func) {
  let newArr = [];
  executeforEach (arr,function(i){
     newArr.push(func(i));
  });
  return newArr;
}
mapArray([2, 5, 8], function(el) {
  return el + 3;
});

function filterArray (arr,func) {
  var changedArr = []; 
  executeforEach (arr,function(i) {
    if (func(i)){
      changedArr.push(i);
    }
  });
  return changedArr;
}
filterArray([2, 5, 8], function(el) {
  return el > 3;
});

var data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function getAmountOfAdultPeople(data) {
  function older(el) {
    return el.age > 18;
  }
  return filterArray(data,older).length;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data) {
  function select(el) {
    if (el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green"){
      return el;
    }
  }
  function getName (arr) {
    return arr.name;
  }
  return mapArray (filterArray(data,select), getName);
}
getGreenAdultBananaLovers(data);

function keys(obj) {
  var arr = [];
  for(var prop in obj) {
    arr.push(prop);
  }
  return arr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
  var arr = [];
  for(var prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
  var month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
  return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  return date.getFullYear()%2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
  return date.getMonth()%2 !== 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));