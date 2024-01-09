# 231. Is Power of Two

**Difficulty:** `Easy`

## _[Problem](https://leetcode.com/problems/power-of-two/)_

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

**Example 1:**

```plaintext
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**

```plaintext
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**

```plaintext
Input: n = 3
Output: false
```

**Constraints:**

- `-2^31 <= n <= 2^31 - 1`
  
## Solutions

### High-level Idea

- The idea is to use a loop to check if `n` is a power of two.
  - We can do this by iterating while `n > 1`.
    - If `n % 2 != 0`, return `False`.
    - Otherwise, set `n = n // 2`.
  - Return `True` at the end.
  