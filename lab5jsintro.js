/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr() {
    return [1, 1];
}

/* Problem 2. finding maximum of two numbers*/
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


console.log("Expected output of max() is 10 " + myFunctionTest(10, function () {
    return max(5, 10);
}));

/* Problem 3. finding maximum of three numbers
function maxOfThree(num1,num2,num3){
    return max(num1,num2) > num3 ? ;
}
*/

console.log("Expected output of max() is 10 " + myFunctionTest(10, function () {
    return max(5, 10);
}));

/* Problem 4. function is vowel*/
function isVowel(cha) {
    if ((cha === "a" || cha === "e" || cha === "i" || cha === "i" || cha === "o" || cha === "u") && cha.length === 1)
        return true;
    else
        return false;
}


console.log("Expected output of isVowel() is true " + myFunctionTest(true, function () {
    return isVowel("z");
}));

/* Problem 5. function Sum and Multiply*/

/* i.sum function using lambda expression*/
function sum(arr) {
    const total = function () {
        return arr.reduce((a, b) => a + b, 0);
    }
    return total(arr);
}

/*ii.sum function using function expression*/

function sum(arr) {
    const total = function () {
        return arr.reduce(function (a,b) {
            return a+b;
        }, 0);
    }
    return total(arr);
}


console.log("Expected output of sum([1,2,3,4])  is 10 " + myFunctionTest(10, function () {
    return sum([1, 2, 3, 4]);
}));

/* i.multiply function using lambda expression*/
function multiply(arr) {
    const product = function () {
        return arr.reduce((a, b) => a * b, 1);
    }
    return product(arr);
}

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(24, function () {
    return multiply([1, 2, 3, 4]);
}));

/* Problem 6. function Reverse a String*/
function reverse(str){
  let q="";
  for (let i=str.length-1;i>=0;i--){
      q += str[i];
  }
  return q;
}

console.log("Expected output of reverse() is  " + myFunctionTest("tah", function () {
    return reverse("hat");
}));

/* Problem 7. function of longest word*/


function findLongestWord(arr){
    let max=arr[0];
    for (let i=0; i< arr.length;i++){
        if (arr[i].length>max.length)
            max=arr[i];
    }
    return max;
}


console.log("Expected output of findLongestWord([gibesa,bisr,john) is  gibesa " + myFunctionTest("gibesa", function () {
    return findLongestWord(["gibesa","bisr","john"]);
}));


/* Problem 8. function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i*/

function fiterLongestWord(arr,i){
    let result = arr.filter(
        function (elem) {
            return elem.length > i;
        });
   return result;
}
console.log("Expected output of fiterLongestWord([gibesa,bisr,john) is  gibesa,bisrKidane " + myFunctionTest(['gibesa','bisrKidane'], function () {
    return fiterLongestWord(["gibesa","bisrKidane","john"],5);
}));


/*Problem 9. function filterLongWords()*/

/*a) multiply each element by 10*/

function multiplyBy10(arr) {
    return arr.map(function (elem,i,arr) {
        return elem * 10;
    })
}
console.log("Expected output of multiplyBy10([1,2,3]) is  [10,20,30] " + myFunctionTest([10,20,30], function () {
    return multiplyBy10([1,2,3]);
}));

// b) all ements equals 3
function allElementsequals3(arr) {
    return arr.filter(function (elem,i,arr) {
        return elem == 3;
    })
}

console.log("Expected output of allElementsequals3([1,2,3]) is  3] " + myFunctionTest([3], function () {
    return allElementsequals3([1,2,3]);
}));

//c product of all elements
function productOfAllElements(arr) {
    return arr.reduce(function (total,elem,i,arr) {
        return total * elem;
    },1);
}

console.log("Expected output of productOfAllElements([1,2,3]) is  6 " + myFunctionTest(6, function () {
    return productOfAllElements([1,2,3]);
}));
