var date = Date.now();
console.log(date);

/*********/

// let vals = [1,2,3,4,5,6];

//long version with separate function
// function sum(accumulator, value) {
//   return accumulator + value;
// }

// let result = vals.reduce(sum);

//short version with ES6
// let result = vals.reduce((accumulator, value) => accumulator + value);

// console.log(result);

//long version without separate function
// var result = vals.reduce(function(accumulator, value) {
//   return accumulator + value;
// });

//long version with 0 as second argument (starting value of the accumulator)
// var result = arr.reduce(function(accumulator, current) {
//   return accumulator + current;
// }, 0);

/*********/

// function getSums(arr) {
//   var result = [];
//   if (!arr.length) return result;

//   var totalSum = arr.reduce(function(sum, item) {
//     result.push(sum);
//     return sum + item;
//   });
//   result.push(totalSum);

//   return result;
// }

// console.log(getSums([1,2,3,4,5]));

/*********/

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = arr.map(function(item) {
//   return item.length;
// });

// // var arrLength = arr.map((item) => item.length);

// console.log( arrLength ); 

/*********/

// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {

//   console.log( list.value ); // (1)

//   if (list.next) {
//     printList(list.next); // (2)
//   }

// }

// printList(list);

/*********/

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// var newStrings = strings.filter((string) => string.length < 5);
// console.log(newStrings);

// var numbers = [1, 2, 3, 4, 5];

// var total = numbers.reduce(function (previous, current) {
//   return previous + current;
// }, 0);

// console.log(total);

/*********/

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// function unique(arr) {
//   var obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     var str = arr[i];
//     obj[str] = true;
//   }
//   return Object.keys(obj);
// }

// console.log(unique(strings));

/*********/

// function aclean(arr) {
//   var obj = {};

//   for (var i = 0; i < arr.length; i++) {
//     var sorted = arr[i].toLowerCase().split('').sort().join('');
//     obj[sorted] = arr[i];
//     console.log(obj);
//   }
//   var result = [];
//   for (var key in obj) result.push(obj[key]);
//   return result;
// }

// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// console.log(aclean(arr));

/*********/

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// function compareAge(personA, personB) {
//   return personA.age - personB.age;
// }

// people.sort(compareAge);

// for(var i = 0; i < people.length; i++) {
//   console.log(people[i].name); // Вовочка Маша Вася
// }


// var arr = ["HTML", "JavaScript", "CSS"];
// var newArr = arr.slice().sort();
// console.log(newArr);
// console.log(arr);


// var arr = [5, 2, 1, -10, 8];

// function compareReversed(a, b) {
//   return b - a;
// }
// arr.sort(compareReversed);

// console.log(arr);



// function removeClass(obj, cls) {
//   var classes = obj.classNames.split(' ');

//   for (var i = 0; i < classes.length; i++) {
//     if (classes[i] == cls) {
//       classes.splice(i, 1); 
//       i--; 
//     }
//   }
//   obj.classNames = classes.join(' ');

// }

// var obj = {
//   classNames: 'open menu menu'
// }

// removeClass(obj, 'menu');
// console.log(obj.classNames); 

// function camelize(str) {
//   var arr = str.split('-');

//   for (var i = 1 ; i < arr.length ; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   return arr.join('');
// }

// console.log(camelize('-new-myStr'));


// function addClass(obj, cls) {
//   var classes = obj.classNames ? obj.classNames.split(' ') : [];

//   if (classes.indexOf(cls) == -1) {
//     classes.push(cls);
//     obj.classNames = classes.join(' ');
//   }
  
//   return obj;
// }

// var obj1 = {
//   classNames: ''
// }

// console.log(addClass(obj1, 'oldmen'));

// var user = {
//   name: "Петя",
//   age: 30
// }
// var keys = Object.keys(user);

// console.log( keys ); // name, age

// var store = {};
// var items = ["div", "a", "form"];
// for (var i = 0; i < items.length; i++) {
//   var key = items[i]; // для каждого элемента создаём свойство
//   store[key] = true; // значение здесь не важно
// }
// console.log(store);


// if (store['div']) {
//   console.log('exists');
// }


// var classes = [1, 0, false];
// console.log( arr.lastIndexOf(false)); 

// var arr = [{name: 'Cat'}, {age: '2'}];
// var newArr = arr.concat({surname: 'Meow'});
// console.log(newArr);


// var arr = [1, 2, 3];
// console.log(arr.reverse());

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }

// var arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// console.log(arr);


// var arr = ["Почему", "надо", "учить", "JavaScript"];
// var arr2 = arr.slice();
// console.log(arr2);

// var arr = ["Я", "изучаю", "JavaScript"];
// var newArr = arr.splice(-2, 0, "сложный", "язык");
// console.log(newArr);
// console.log(arr);


// function eratosthenes(n) {
//   var array = [];
//   for (var i = 2; i <= n; i++) {
//     array.push(i);
//   }
//   var p = 2;
//   while (p*p < n) {
//     var indexOfP = array.indexOf(p);
//     array = array.filter(index => index % p != 0);
//     array.splice(indexOfP, 0, p);
//     for (index of array) {
//       if (index > p) {
//         p = index;
//         break;
//       }
//     }
//   }
//   var sum = array.reduce((a, b) => a + b, 0); //sum of array elements using 'reduce'
//   return sum;
// }

// console.log(eratosthenes(100));

// do {
//   var filteredArray = array.filter(index => index % 2 != 0);
// } while (p*p < n);

// function filterRange(arr, a, b) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >=a && arr[i] <= b) {
//       newArr.push(arr[i]);
//     };
//   }
//   return newArr;
// }

// var arr1 = [5, 4, 3, 8, 0];
// console.log(filterRange(arr1, 0, 5));

// создаем пустой массив и проверяем поддерживается ли indexOf
// if ([].indexOf) {

//   var find = function(array, value) {
//     return array.indexOf(value);
//   }

// } else {
//   var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }

//     return -1;
//   }
// }

// function find(arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }

// arr = ["test", 2, 1.5, false];
// console.log(find(arr, 2));

// var arr = [];
// var newValue = '';
// var sum = 0;
// do {
//   newValue = prompt("type in a new value", "");
//   arr.push(newValue);
// } while (newValue != '' && newValue != null && !isNaN(newValue));

// for (var i = 0; i < arr.length; i++) {
//   if (!isNaN(arr[i])) {
//     sum += +arr[i];
//   }
// }
// console.log(arr);
// console.log( sum );



// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * arr.length);
// console.log(arr[rand]);

// var styles = ["джаз", "блюз"];
// styles[styles.length] = 'рокнролл';
// styles[styles.length-2] = 'Классика';
// //alert(styles.shift());
// styles.shift();
// styles.unshift("рэп", "рэгги");
// console.log(styles);

// var goods = ["one", "two", "three"];
// //goods.push("computer");
// goods[goods.length] = 'Компьютер'
// console.log(goods);

// var goods = ["one", "two", "three"];
// goods[40] = "new";
// var lastIndex = goods.length - 1;
// console.log(lastIndex);

// var fruits = ["Яблоко", "Апельсин", "Груша"];
// fruits[4] = "Вишня"
// fruits.length = 6;
// console.log(fruits);

// for (var i = 0; i < fruits.length; i++) {
//   console.log( fruits[i] );
// }
// for (var value of fruits) {
//   console.log(value);
// }
//console.log(fruits);

// arr.splice(0,1);
// console.log(arr);

// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric(object) {
//     for (var key in object) {
//         if (isNumeric(object[key])) {
//             object[key] *= 2;
//         }
//     }
//     return object;
// }

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

//multiplyNumeric(salaries);
//console.log(multiplyNumeric(salaries));


// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
  
// var max = 0;
// var maxName = "";
// for (var name in salaries) {
//     if (max < salaries[name]) {
//         max = salaries[name];
//         maxName = name; //what is name in this case? current value?
//     }
// }
    
//console.log( maxName || "нет сотрудников" );

// function isEmpty(obj) { //checks if array is not empty
//     for (var key in obj) {
//        return false;
//     }
//     return true;
// }

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }

// function findBiggest(object) { //finds the biggest value in an object (convert into array and use Math.max)
//     if (isEmpty(object)) {
//         return ("Нет сотрудников");
//     }
//     var valueNumbers = Object.values(object);
//     var maxValue = Math.max(...valueNumbers);
//     var maxName = getKeyByValue(object, maxValue);
//     return maxName;
// }

// var salaries = {
//     "Вася": 600,
//     "Петя": 300,
//     "Даша": 250,
//     "Дина": 601,
//     "Даа": 602
// };

// console.log(findBiggest(salaries));


// var schedule = {};
// //schedule["8:30"] = "подъём";
// console.log( isEmpty(schedule) );



// user = {
//     name: "Vasya",
//     age: 25,
//     height: 180
// }

// console.log(Object.keys(user).length); //ES6 

// var counter = 0;
// for (var property in user) { //non ES6
//     counter ++;
// }
// console.log(counter);

// for (key in user) {
    
//     console.log(key); // goes through the keys
//     //console.log(user[key]); //goes through the values
// }

// user = {};
// user.name = "Vasya";
// user["surname"] = "Petrov";
// user.name = "Sergey";
// delete user["surname"];

// console.log(user);

// function extractCurrencyValue(str) {
// 	return +str.slice(1);
// }
// console.log(extractCurrencyValue('$156'));


// function truncate(str, maxlength) {
// 	var length = str.length;
// 	if ( length > maxlength ) {
// 		console.log(length);
// 		return str.slice(0, maxlength - 3) + '...';
// 	}
// 	return str;
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function checkSpam(str) {
// 	newStr = str.toLowerCase();
// 	if ((newStr.indexOf('viagra') != -1) || (newStr.indexOf('xxx') != -1)) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// console.log(checkSpam('innocent rabbit'));

// function checkSpam(str, query) {
// 	resArray = string_to_array(str);
// 	console.log(resArray);
// 	result = resArray.findIndex(item => query.toLowerCase() === query.toLowerCase());
// 	return result;
// }

// string_to_array = function (str) {
// 	return str.trim().split(" ");
// };


// function ucFirst(str) {
// 	var ucFirstSymbol = str.charAt(0).toUpperCase();
// 	var restOfString = '';
// 	for (var i = 1; i < str.length; i++) {
// 		restOfString += str.charAt(i);
// 		console.log(restOfString);
// 	}
// 	return ucFirstSymbol + restOfString;
// }

// function ucFirst(str) {
// 	var ucFirstSymbol = str.charAt(0).toUpperCase();
// 	var restOfString = str.slice(1);
// 	return ucFirstSymbol + restOfString;
// }

// console.log(ucFirst(''));


// function getDecimal(num) {
// 	var str = "" + num;
// 	var zeroPos = str.indexOf(".");
// 	console.log(zeroPos);
// 	if (zeroPos == -1) return 0;
// 	str = str.slice(zeroPos);
// 	return +str;
// }
// console.log(getDecimal(12.345));


// function getDecimal(num) {
// 	var partsOfSplitString = num.toString().split('.');
// 	var decimal = +('0.' + partsOfSplitString[1]);
// 	return decimal;
// }

// console.log(getDecimal(12.345));


// for (var i = 2; i <= 10; i++) {
// 	if (i % 2 !== 0) continue;
//     alert(i); 
// }

// var i = 0;
// while (i < 3) {
// 	alert( "номер " + i + "!" );
// 	i++;
// }


// var a = prompt("Введите число больше 100", "");

// if (a >= 100 || a == null) {
// 	alert('got it');
// }
// else {
// 	var a = prompt("Введите число больше 100", "");
// }

// var num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);


// for (var num = 2; num <= 17; num++) {
// 	var simple = true;
// 	for (var i = 2; i <= num - 1; i++) {
// 		if (num % i == 0) {
// 			simple = false;
// 		}
// 	}
// 	if (simple) {
// 		alert(num);
// 	}
// }

// switch (browser) {
// 	case 'IE':
// 		alert( 'О, да у вас IE!' );
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert( 'Да, и эти браузеры мы поддерживаем' );
// 		break;

// 	default:
// 		alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// 	}

// var a = +prompt('a?', '');
// switch(a) {
// 	case 0:
// 		alert( 0 );
// 		break;

// 	case 1:
// 		alert( 1 );
// 		break;

// 	case 2:
// 	case 3:
// 		alert( '2,3' );
// 		break;
// }

// function showMessage(name) {
// 	alert('Привет' + ' ' + name + '!');
// }

// showMessage("вася");
// showMessage("петя");

// function returnMin (a,b) {
// 	if (a < b) {
// 		return a;
// 		alert(a);
// 	}
// 	else {
// 		return b;
// 		alert(b);
// 	}
// }

// function min(a, b) {
// 	return a < b ? a : b;
// }

// var x = prompt("введите x", "");
// var n = prompt("введите n", "");

// function pow(x,n) {
// 	if (n >= 0) {
// 		return Math.pow(x,n); 
// 	}
// 	else {
// 		alert('negative number');
// 	}
// }

// alert(pow(x,n)); 

// function pow(x, n) {
// 	var result = x;

// 	for (var i = 1; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }
  
// var x = prompt("x?", '');
// var n = prompt("n?", '');

// if (n <= 1) {
// 	alert('Степень ' + n +
// 		'не поддерживается, введите целую степень, большую 1'
// 	);
// } else {
// 	alert( pow(x, n) );
// }

// function sumTo(n) {
// 	var sum=0;
// 	for(var i = 1; i<=n; i++) {
// 		sum = sum + i; 
// 	}
// 	return sum;
// }
// console.log(sumTo(100));

// function sumTo(n) {
// 	if (n != 1) { 
// 		return n + sumTo(n-1);
// 	}
// 	else {
// 		return n;
// 	}
// }

// console.log(sumTo(3));

// function factorial(n) {
// 	if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n-1);
// 	}
// }
// console.log(factorial(5));

// function factorial(n) {
// 	return 
// 		(n != 1) 
// 		? n * factorial(n - 1) 
// 		: 1;
// }

// function fib(n) {
// 	return (n <=1) ? 1 : (fib(n-1) + fib(n-2));
// }

// console.log(fib(15));

// function fib(n) {
// 	var fibonacci;
	
// }

// var a = prompt("type in number 1 ", '');
// var b = prompt("type in number 2 ", '');

// function sum(a, b) {
	
// 	if (isNumeric(a) && isNumeric(b)) {
// 		return(a+b);
// 	}
// 	console.log ("There was a mistake");
// }

// function isNumeric(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// }

// console.log(sum(a,b));


