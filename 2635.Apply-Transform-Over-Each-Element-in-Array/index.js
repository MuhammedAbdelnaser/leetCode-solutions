/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var mapUsingForLoop = function(arr, fn) {
  const transformation = []

  for (let i = 0; i < arr.length; i++) {
    transformation.push(fn(arr[i], i))
  }

  return transformation
};

var mapUsingRecursion = function(arr, fn, index = 0) {
  if (index >= arr.length) {
    return [];
  }

  return [fn(arr[index], index)].concat(map(arr, fn, index + 1))

};