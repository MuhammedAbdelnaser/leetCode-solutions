/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let map = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(`Step ${right}: Current char = ${s[right]}, Left = ${left}, Right = ${right}, MaxLength = ${maxLength}`);

    }

    return maxLength;

};


console.log(lengthOfLongestSubstring("abcabcbb")) // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")) // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")) // Output: 3
console.log(lengthOfLongestSubstring("")) // Output: 0
console.log(lengthOfLongestSubstring(" ")) // Output: 1
console.log(lengthOfLongestSubstring("aab")) // Output: 2