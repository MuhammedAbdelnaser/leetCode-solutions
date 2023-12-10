
const findDuplicate = function(nums) {
    const sorting = nums.sort((a,b) => a - b)
    let duplicated;
    for(let i = 0, j = i + 1; i < sorting.length; i++, j++) {
      if (sorting[i] === sorting[j]) {
        duplicated = sorting[i]
      }
    }
    return duplicated;
};

findDuplicate([1,3,5,3,7,2,6,9,0])