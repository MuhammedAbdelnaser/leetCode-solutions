var isPowerOfTwo = function(n) {
  if (n===1) return true;
  if (n % 2 === 0) {
      n = n / 2
  } else {
      return false
  }
  return isPowerOfTwo(n);
};

console.log(isPowerOfTwo(14));