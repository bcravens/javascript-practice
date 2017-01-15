$(document).ready(() => {

// FACTORIAL USING RECURSION
function recursivefactorial(n) {
  if (n < 0) {
    return console.log("Must be posivitive integer")
  } else if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n-1)
}
// console.log(factorial(5))


//FACTORIAL USING LOOPS
function loopFactorial(n) {
  var result = n
  while (n > 1) {
    result = result * (n-1)
    n--
  }
  return result
}
// console.log(factorial(5))


//CHECK IF PRIME NUMBER
function isPrime(n) {
  var divisor = 2

  while (n > divisor) {
    if(n % divisor == 0) {
      return false
    }
    else {
      divisor++
    }
  }
  return true
}
// console.log(isPrime(137))
// console.log(isPrime(237))


// CHECK NTH FIBONACCI NUMBER USING LOOPS
function fibonacciLoops(n) {
  var fibo = [0,1]

  if (n <= 2) return 1

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2]
  }
  return fibo[n]
}
// console.log(fibonacciLoops(12))

// CHECK NTH FIBONACCI NUMBER USING RECURSION
function fibonacciRecursion(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacciRecursion(n-1) + fibonacciRecursion (n-2)
  }
}
// console.log(fibonacciRecursion(12))


//GREATEST COMMON DIVISOR
function greatestCommonDivisor(a, b) {
  var divisor = 2
      greatestDivisor = 1

  if (a < 2 || b < 2) {
    return 1
  }

  while (a >= divisor && divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor
    }
    divisor++
  }
  return greatestDivisor
}
// console.log(greatestCommonDivisor(14, 21))
// console.log(greatestCommonDivisor(69, 169))


//REMOVE DUPLICATE FROM ARRAY
function removeDuplicate(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}
// console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))

//MERGE TWO SORTED ARRAYS
function mergeSortedArray(a, b){
  var merged = [],
      aElm = a[0],
      bElm = b[0],
      i = 1,
      j = 1;

  if(a.length ==0)
    return b;
  if(b.length ==0)
    return a;
  while(aElm || bElm){
   if((aElm && !bElm) || aElm < bElm){
     merged.push(aElm);
     aElm = a[i++];
   }
   else {
     merged.push(bElm);
     bElm = b[j++];
   }
  }
  return merged;
}
// mergeSortedArray([2,5,6,9], [1,2,3,29]);


//STRING REVERSE
function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}
// reverse('you are a nice dude');

//RECURSIVE STRING REVERSE
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
// reverse('you are a nice dude');

//SIMPLE VERSION
function reverse(str){
  if(!str || str.length <2) return str;

  return str.split('').reverse().join('');
}


//RESERSE WORDS
function reverseWords(str){
 var rev = [],
     wordLen = 0;
 for(var i = str.length-1; i>=0; i--){
   if(str[i]==' ' || i==0){
     rev.push(str.substr(i,wordLen+1));
     wordLen = 0;
   }
   else
     wordLen++;
 }
 return rev.join(' ');
}


//SIMPLE
function reverseWords(str){
  return str.split(' ').reverse();
}
    


});
