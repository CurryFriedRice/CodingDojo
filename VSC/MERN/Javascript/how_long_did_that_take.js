Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log("**********PRIME*********");

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//30 Seconds Initially
// 2 seconds after redoing it
console.log("*********FIBONACCI*******");

// This one is running O(2N^2)?
// so it stacks up and will run slower since it has to calculate N every tme
// recursive
const startRFib = performance.now();
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
console.log(`This took ${performance.now() - startRFib} milliseconds to run`);

const startIFib = performance.now();

// This one is running O(N) amount of times just moving forward.
// iterative
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) { 
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}
iFib(20);
console.log(`This took ${performance.now() - startIFib} milliseconds to run`);

console.log("**********REVERSE*********");

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reverse1 = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(`This took ${performance.now() - reverse1} milliseconds to run`);


const reverse2 = performance.now();
const reversed2 = (story) => {
    let retVal = "";
    for (let i = 0; i < story.length; i++)
    {
        retVal = story[i] + retVal
    }
    return retVal;
}
console.log(`This took ${performance.now() - reverse2} milliseconds to run`);
