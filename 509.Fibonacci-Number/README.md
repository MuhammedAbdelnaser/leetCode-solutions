# 509. Fibonacci Number

**Difficulty:** Easy

## _[Problem](https://leetcode.com/problems/fibonacci-number/)_

The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```plaintext
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given `n`, calculate `F(n)`.

**Example 1:**

```plaintext
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

**Example 2:**

```plaintext
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

**Example 3:**

```plaintext
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

**Constraints:**

- `0 <= n <= 30`
- `F(n)` is guaranteed to fit in a 32-bit signed integer, if `n` is less than or equal to `30`.

## Solutions

### High-level Idea

- The idea is to use recursion to calculate the Fibonacci number.
  - We can do this by using a helper function.
    - If `n == 0`, return `0`.
    - If `n == 1`, return `1`.
    - Otherwise, return `fib(n - 1) + fib(n - 2)`.
  - Return the result of the helper function at the end.
