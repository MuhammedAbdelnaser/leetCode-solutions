/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  const square = num / Math.pow(num, 0.5);

  if (Number.isInteger(square)) {
    return true;
  }
  return false;
};