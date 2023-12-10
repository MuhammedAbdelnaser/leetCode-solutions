# 3Sum

[Problem Description on LeetCode](https://leetcode.com/problems/3sum/)

**Difficulty: Medium*

## Problem Statement

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Example 1

```plaintext
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

### Example 2

```plaintext
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

### Constraints

* `3 <= nums.length <= 3000`
* `-10^5 <= nums[i] <= 10^5`
  
## Solution

### High-level Idea

* The idea is to sort the array and iterate through it.
  * For each element, we want to find two other elements that sum to the negative of the current element.
  * We can do this by using two pointers, one at the element after the current element and one at the end of the array.
  * If the sum of the three elements is less than 0, we increment the left pointer.
  * If the sum of the three elements is greater than 0, we decrement the right pointer.
  * If the sum of the three elements is equal to 0, we add the three elements to the result and increment the left pointer and decrement the right pointer.
  * We also need to make sure that we don't add duplicate triplets to the result.
    * To do this, we can skip over duplicate elements when we increment or decrement the pointers.
  * Return the result at the end.
  * If the array is empty, return an empty array.