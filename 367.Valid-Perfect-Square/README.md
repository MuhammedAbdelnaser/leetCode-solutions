# 367. Valid Perfect Square

**Difficulty:** `Easy`

## _[Problem](https://leetcode.com/problems/valid-perfect-square/)_

Given a **positive** integer `num`, write a function which returns `True` if `num` is a perfect square else `False`.

**Follow up:** **Do not** use any built-in library function such as `sqrt`.

**Example 1:**

```plaintext
Input: num = 16
Output: true
```

**Example 2:**

```plaintext
Input: num = 14
Output: false
```

**Constraints:**

- `1 <= num <= 2^31 - 1`

## Solutions

### High-level Idea

- The idea is to use binary search to find the square root of `num`.
  - We can do this by setting `left = 1` and `right = num`.
  - Then, we can iterate while `left <= right`.
    - Set `mid = (left + right) // 2`.
    - If `mid * mid == num`, return `True`.
    - If `mid * mid < num`, set `left = mid + 1`.
    - Otherwise, set `right = mid - 1`.
  - Return `False` at the end.
