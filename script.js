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






});
