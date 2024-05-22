/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
     return [i, map.get(target - nums[i])]
    }
    map.set(nums[i], i)
  }

};

console.log(twoSum([2,7,11,15], 9)) // Output: [0,1]
console.log(twoSum([3,2,4], 6)) // Output: [1,2]
console.log(twoSum([2,5,5,11], 10)) // Output: [1,2]
console.log(twoSum([3,3], 6)) // Output: [0,1]