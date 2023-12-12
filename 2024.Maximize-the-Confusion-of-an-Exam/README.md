# 2024. Maximize the Confusion of an Exam

[Problem Description on LeetCode](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)

**Difficulty:** Medium

Given a string `answerKey` and an integer `k`, return *the **maximum number** of consecutive `1`'s in the string **answerKey** after performing the following operation any **k** times*:

- If there are two consecutive `0`'s in `answerKey`, **flip** the right one.
- Return the **maximum number** of consecutive `1`'s in the string **answerKey**.

**Example 1:**

```plaintext
Input: answerKey = "TTFF", k = 2
Output: 4
Explanation: We can flip both the 'F's at positions 1 and 2 to get 4 consecutive 'F's.
```

**Example 2:**

```plaintext
Input: answerKey = "TFFT", k = 1
Output: 3
Explanation: We can flip the first 'T' at position 0 to get 3 consecutive 'T's.
```

**Example 3:**

```plaintext
Input: answerKey = "TTFTTFTT", k = 1
Output: 5
Explanation: We can flip the first 'F' at position 1 to get 5 consecutive 'F's.
```

**Constraints:**

- `1 <= answerKey.length <= 10^5`
- `answerKey[i]` is either `'T'` or `'F'`
- `1 <= k <= answerKey.length`

## Solution

```javascript
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    let count = 0;
    while(right < answerKey.length) {
        if(answerKey[right] === 'F') {
            count++;
        }
        while(count > k) {
            if(answerKey[left] === 'F') {
                count--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    left = 0;
    right = 0;
    count = 0;
    while(right < answerKey.length) {
        if(answerKey[right] === 'T') {
            count++;
        }
        while(count > k) {
            if(answerKey[left] === 'T') {
                count--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};
```
