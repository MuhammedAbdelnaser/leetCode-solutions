# 2635. Apply Transform Over Each Element in Array

Difficulty: _Medium_

## _[Problem](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)_

Given an array of integers, apply a transformation to each element in the following way:

- If the element is even, divide it by 2.
- If the element is odd, multiply it by 3 and add 1.
- Return the resulting array.

Implement a function that applies the above transformation to each element in the input array and returns the resulting array.

Example 1:

```plaintext
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
```

Example 2:

```plaintext
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
```

Example 3:

```plaintext
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
```

**Constraints:**

- `1 <= arr.length <= 100`
- `-10^9 <= arr[i] <= 10^9`
- The function `fn` will always return an integer.
